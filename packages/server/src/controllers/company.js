const createCompany = (ctx) => {
    ctx.body = {
        code: '200',
        message: '项目创建成功',
        data: {},
    }
}

const retrieveCompany = (ctx) => {
    ctx.body = {
        code: '200',
        message: '项目创建成功',
        data: {
            id: 17,
        },
    }
}

module.exports = {
    createCompany,
    retrieveCompany,
}
