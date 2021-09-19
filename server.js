require('module-alias/register');

const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mongoose = require("mongoose");

const config = require('@secrets/config');
const userModel = require('./lib/db/models/user_info');

require('@lib/db/connect')(mongoose, config);

const PORT = config.PORT;

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());



//Test The Api

app.get('/testing', (req, res)=>{
    res.send("working now");
});

//API

require('./api/register')(app, userModel);
require('./api/update_location')(app, userModel);
require('./api/check_location')(app, userModel);

server.listen(PORT, ()=>{
    console.log(`server is running port ${PORT}`);
});