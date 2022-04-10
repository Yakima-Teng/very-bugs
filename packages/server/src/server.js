const Koa = require('koa');
const Router = require('@koa/router');

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

app.listen(3000);
