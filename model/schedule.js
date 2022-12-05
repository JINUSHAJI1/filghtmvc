const sequelize = require('./db');
const {DataTypes} = require('sequelize');

const Schedule = sequelize.define('Schedule',{
    sid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    // fid: {
        
    // },
    fnumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    source: {
        type: DataTypes.STRING(70),
        allowNull: false
    },
    destination: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false,
    }
});

module.exports = Schedule;