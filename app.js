require('dotenv').config;
const { urlencoded } = require('express');
const express = require('express');
const app = express();
const morgan = require('morgan')

//routes
const home = require('./routes/home')

//middleware 
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/api/v1', home);

module.exports = app