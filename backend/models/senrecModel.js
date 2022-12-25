const Sequelize = require('sequelize');
const db = require('../config/database');
const { DataTypes } = Sequelize;
 
const Product = db.define('sen_rec',{
    id_sen_rec:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_barang:{
        type: DataTypes.INTEGER,
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
    nama_penerima:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    alamat:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: true
    },
    resi:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    },
    id_pengiriman:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: true
    }
});
 
module.exports = Product;