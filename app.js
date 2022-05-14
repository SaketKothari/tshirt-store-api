const express = require('express');
require('dotenv').config();
const app = express();

// import all routes here
const home = require('./routes/home');

// router middleware
app.use('/api/v1', home);

// export app.js
module.exports = app;
