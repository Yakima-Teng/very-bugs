const { defineModel, DataTypes } = require('../scripts/sequelize.js')

const User = defineModel('user', {
    companyId: {
        type: DataTypes.STRING,
    },
    displayName: {
        type: DataTypes.STRING,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
})

module.exports = {
    User,
}
