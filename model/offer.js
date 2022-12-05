const sequelize = require('./db');
const {DataTypes} = require('sequelize');
// const Review = require('./review');

const Offer = sequelize.define('Offer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    flightname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    offer: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },

});

module.exports = Offer;