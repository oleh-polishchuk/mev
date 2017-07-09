const express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    config = require('../config');

exports.init = (next) => {
    var app = express();

    // all environments
    app.set('port', config.getConfig().port);

    // Parsers for POST data
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    // Set out api routes
    require('../routes/api.routes').init(app);

    var server = http.createServer(app);

    server.listen(config.getConfig().port);
    next();
};
