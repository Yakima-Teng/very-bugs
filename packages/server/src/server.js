const Koa = require('koa');
const Router = require('@koa/router');

const { sequelize } = require('./scripts/sequelize.js')
const { User } = require('./models/user.js')

void (async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        /**
         * sync(): This creates the table if it doesn't exist (and does nothing if it already exists)
         * sync({ force: true }) - This creates the table, dropping it first if it already existed
         * sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
         *
         * Reference: https://sequelize.org/docs/v6/core-concepts/model-basics/
         */
        await sequelize.sync({ alter: true });
        // 如果不存在管理员，则创建管理员
        const [userAdmin, created] = await User.findOrCreate({
            where: { username: 'admin' },
            defaults: {
                password: '123456',
            },
        })
        if (created) {
            console.log(`管理员账号已新建：${JSON.stringify(userAdmin.toJSON())}`);
        } else {
            console.log(`管理员账号已存在：${JSON.stringify(userAdmin.toJSON())}`);
        }
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

const companyController = require('./controllers/company.js')
const userController = require('./controllers/user.js')
const projectController = require('./controllers/project.js')
const bugController = require('./controllers/bug.js')

const app = new Koa();
const router = new Router();

/**
 * 项目比较小，所有接口都直接列到这里，一目了然
 */
// 公司相关接口
router.post('/companies', companyController.createCompany)
router.get('/companies/:companyId', companyController.retrieveCompany)

// 用户相关接口
router.post('/users', userController.createUser)
router.get('/users', userController.retrieveUsers)
router.get('/users/:userId', userController.retrieveUser)

// 项目相关接口
router.post('/projects', projectController.createProject)
router.get('/projects', projectController.retrieveProjects)
router.get('/projects/:projectId', projectController.retrieveProject)
router.put('/projects/:projectId', projectController.updateProject)
router.delete('/projects/:projectId', projectController.deleteProject)
router.delete('/projects/deleteUserFromProject', projectController.deleteUserFromProject)

// bug相关接口
router.post('/bugs', bugController.createBug)
router.get('/bugs', bugController.retrieveBugs)

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3001);
