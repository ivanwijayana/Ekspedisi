const Sequelize = require('sequelize');
const db = require('../config/database');
const { DataTypes } = Sequelize;
 
const Product = db.define('sen_tran',{
    id_sen_tran:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_barang:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    },
    id_cabang_asal:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    },
    nama_cabang_asal:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    id_admin:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    },
    nama_admin:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    id_cabang_penerima:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    },
    nama_cabang_penerima:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    resi_barang:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    },
    id_ekspedisi:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    }
});
 
module.exports = Product;