const Koa = require('koa');
const Router = require('@koa/router');

const companyController = require('./controllers/company.js')
const userController = require('./controllers/user.js')

const app = new Koa();
const router = new Router();

// 公司相关接口
router.post('/companies', companyController.createCompany)
router.get('/companies/:companyId', companyController.retrieveCompany)

// 用户相关接口
router.post('/users', userController.createUser)
router.get('/users', userController.retrieveUsers)
router.get('/users/:userId', userController.retrieveUser)

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000);
