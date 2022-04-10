const { defineModel, DataTypes } = require('../scripts/sequelize.js')

const Bug = defineModel('bug', {
    projectId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 当前页面url
    pageUrl: {
        type: DataTypes.STRING,
    },
    // 从请求头上获取referer字段
    referer: {
        type: DataTypes.STRING,
    },
    // 从请求头上获取user-agent字段
    userAgent: {
        type: DataTypes.STRING,
    },
    // 从请求头上获取cookie字段
    cookie: {
        type: DataTypes.STRING,
    },
    errorMessage: {
        type: DataTypes.STRING,
    },
    errorStack: {
        type: DataTypes.STRING,
    },
    // 自定义JSON字符串
    json: {
        type: DataTypes.STRING,
    },
})

module.exports = {
    Bug,
}
