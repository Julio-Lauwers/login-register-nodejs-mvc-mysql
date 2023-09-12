 const { Sequelize } = require('sequelize')

 const sequelize = new Sequelize('loginsystem', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

 })

 try {

    sequelize.authenticate()
    console.log('conectamos ao MySql')

 } catch(error) {
    console.log(`Não foi possivel conectar: ${error}`)
 }

 module.exports = sequelize