const Sequelize = require('sequelize');
const db = require('../config/database');
const { DataTypes } = Sequelize;
 
const Product = db.define('lapor',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    resi:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    bukti:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    }
});
 
module.exports = Product;