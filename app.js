const express = require('express');

const server = require('./server');
const routes = require('./routes/huaweiToStrava');

const app = express();

server.initApp(app, routes);

module.exports = app;
