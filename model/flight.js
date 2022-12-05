const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Flight = sequelize.define('Flight',{
   
    fnumber: {
        type: DataTypes.STRING(30),
        primaryKey:true,
        allowNull: false,
    },
    fname: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    
    ftype: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    fcapacity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Flight;