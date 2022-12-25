const Sequelize = require('sequelize');
const db = require('../config/database');
const { DataTypes } = Sequelize;
 
const Product = db.define('table_admin',{
    admin_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    admin_email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    }
});
 
module.exports = Product;