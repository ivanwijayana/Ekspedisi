const express = require('express');
const session = require('express-session');
const cors = require('cors');
const {json} = require('sequelize');
const mysql = require('mysql');
const app = express();
const port = 3010;

const dotenv = require('dotenv');
const passport = require('passport');
const db = require('./config/database');
const cabangModel = require('./models/cabangModel');
const recuserModel = require('./models/recuserModel');
const recexpModel = require('./models/recexpModel');
const karyawanModel = require('./models/karyawanModel');
const sentranModel = require('./models/sentranModel');
const senrecModel = require('./models/senrecModel');
const adminModel = require('./models/adminModel');
const userModel = require('./models/userModel');

try{
    db.authenticate();
    console.log("succes");
    cabangModel.sync();
    recexpModel.sync();
    recuserModel.sync();
    karyawanModel.sync();
    sentranModel.sync();
    senrecModel.sync();
    adminModel.sync();
    userModel.sync();
} catch (error){
    console.log(error);
}

dotenv.config();

app.use(cors());
app.use('/static', express.static("public"));
app.use(express.json());

app.use('/cabang', require('./routes/cabang'));
app.use('/recuser', require('./routes/recuser'));
app.use('/recexp', require('./routes/recexp'));
app.use('/karyawan', require('./routes/karyawan'));
app.use('/sentran', require('./routes/sentran'));
app.use('/senrec', require('./routes/senrec'));
app.use('/admin', require('./routes/admin'));
app.use('/user', require('./routes/user'));

app.use(express.urlencoded({extended:true}))
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true,
    cookie:{
        httpOnly:true
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use((req,res, next)=>{
    res.locals.user = req.user
    next();
})

app.listen(port, ()=>{
    console.log('Server is running on port' + port);
})