
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');


//models
const User = require('./Models/user');

//rotas
const index = require('../Routes/index');
const userRoute = require('../Routes/UserRoute');



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//conecta ao banco
mongoose.connect(config.connectionString);


// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/', index);
app.use('/user', userRoute);
module.exports = app;