const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: '../../database.sqlite',
})

const defineModel = (modelName = '', attributes = {}) => {
    Object.entries(attributes).forEach(([key, value]) => {
        // 默认所有项均可为null
        if (typeof value.allowNull !== 'boolean') {
            value.allowNull = true
        }
    })
    return sequelize.define(modelName, {
        ...attributes,
    }, {
        sequelize,
        modelName,
        tableName: modelName,
    })
}

module.exports = {
    sequelize,
    defineModel,
    DataTypes,
}
