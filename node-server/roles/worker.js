const express = require('express'),
    http = require('http'),
    config = require('../config');

exports.init = (next) => {
    var app = express();

    // all environments
    app.set('port', config.getConfig().port);
    require('../routes/api.routes').init(app);

    var server = http.createServer(app);

    server.listen(config.getConfig().port);
    next();
};
