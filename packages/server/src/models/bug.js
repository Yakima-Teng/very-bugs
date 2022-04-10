const { defineModel, DataTypes } = require('../scripts/sequelize.js')

const Company = defineModel('company', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    /**
     * 公司下面绑定的项目id，用英文逗号分隔
     * 注：不可为空，新建公司时自动创建一个默认项目
     */
    projectIds: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

module.exports = {
    Company,
}
