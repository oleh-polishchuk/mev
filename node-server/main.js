var async = require('async'),
    config = require('./config');

exports.init = function (conf) {
    config.setConfig(conf);

    async.series([
        function () {
            require('./roles/worker').init(function () {
                console.log('App server is running and listening on port ' + conf.port);
            });
        }
    ]);
};
