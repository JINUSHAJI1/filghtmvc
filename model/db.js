const {Sequelize} = require('sequelize')

const sequelize = new Sequelize("flightapp", "root", "jinu", {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;