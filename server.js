const http = require('http');
const parser = require('body-parser');

/**
 * Handle errors related to port
 * @param {*} error   An error
 */
const errorHandler = error => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

/**
 * Normalize a Port
 * @param {integer} val a port
 * @returns {boolean|number|*}
 */
exports.normalizePort = (val) => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

/**
 * Initialize a server
 * @param {express}  app    Express app
 * @param {int}     port    Port Number
 */
exports.initServer = (app, port) => {
    app.set('port', port);
    const server = http.createServer(app);

    server.on('error', errorHandler);
    server.on('listening', () => {
        const address = server.address();
        const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
        console.log('Listening on ' + bind);
    });
    server.listen(port);
};

exports.initApp = (app, routes) => {
    app.use(parser.urlencoded({extended: true}));
    app.use(parser.json());
    app.use('/', routes);
};
