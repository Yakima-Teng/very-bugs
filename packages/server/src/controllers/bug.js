const createBug = (ctx) => {
    ctx.body = {
        code: '200',
        message: '操作成功',
    }
}

const retrieveBugs = (ctx) => {
    ctx.body = {
        code: '200',
        message: '操作成功',
    }
}

module.exports = {
    createBug,
    retrieveBugs,
}
