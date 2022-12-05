const sequelize = require('./db');
const {DataTypes} = require('sequelize');
// const Review = require('./review');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    mobile: {
        type: DataTypes.INTEGER(20),
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    gender: {
        type: DataTypes.STRING(10),
        allowNull: true
    },
    password: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

module.exports = User;