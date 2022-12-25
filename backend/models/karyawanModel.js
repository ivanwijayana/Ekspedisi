const Sequelize = require('sequelize');
const db = require('../config/database');
const { DataTypes } = Sequelize;
 
const Product = db.define('table_karyawan',{
    id_table_karyawan:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_karyawan:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    },
    nama_karyawan:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    cabang_karyawan:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    }
});
 
module.exports = Product;