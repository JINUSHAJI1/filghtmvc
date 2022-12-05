const user = require('./user');
const offer = require('./offer');
const flight = require('./flight');
const schedule = require('./schedule');


flight.hasMany(schedule)
schedule.belongsTo(flight, {
    foreignKey:{name : "fnumber", field : "fnumber", allowNull: true}
});

user.sync({alter: true});
offer.sync({alter: true});
flight.sync({alter: true});
schedule.sync({alter: true});