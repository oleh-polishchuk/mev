'use strict';

const restler = require('restler'),
    config = require('../config');

exports.getMongoQuery = (sql, cb) => {
    let url = config.getConfig().externalQueryServiceUrl + '/api/getMongoQuery';
    let request = restler.postJson(url, {sql: sql}, {timeout: 10000});

    request.on('complete', (res) => {
        if (res.success) {
            return cb(null, res.data);
        }

        console.error(res.message);
        return cb(res.message);
    });

    request.on('timeout', function () {
        cb(new Error('Request timeout'));
    });
};
