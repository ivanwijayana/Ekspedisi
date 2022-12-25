const Sequelize = require('sequelize');
const db = require('../config/database');
const { DataTypes } = Sequelize;
 
const Product = db.define('table_user',{
    id_table_user:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    },
    username:{
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
