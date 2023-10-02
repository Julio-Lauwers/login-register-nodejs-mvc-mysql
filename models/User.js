const {DataTypes} = require('sequelize')

const db = require('../db/conn')

//         LOGIN            //
const User = db.define('User', {

    usuario: {
        type: DataTypes.STRING,
        require: true
    },
    senha: {
        type: DataTypes.STRING,
        require: true,
    },
})

module.exports = User