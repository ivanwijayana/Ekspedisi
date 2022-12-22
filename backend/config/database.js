const Sequelize = require('sequelize');
 
const db = new Sequelize('app_ekspedisi', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
module.exports = db;