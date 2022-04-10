const { defineModel, DataTypes } = require('../scripts/sequelize.js')

const Project = defineModel('project', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // 项目下面绑定的人，用英文逗号分隔
    users: {
        type: DataTypes.STRING,
    },
})

module.exports = {
    Project,
}
