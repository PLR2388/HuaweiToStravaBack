const constant = require('./variable');
const server = require('./server')

const app = require('./app');

const port = server.normalizePort(process.env.PORT || constant.PORT);
server.initServer(app, port)
