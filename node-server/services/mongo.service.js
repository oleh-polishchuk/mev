'use strict';

const mongoose = require('mongoose'),
    config = require('../config');


let getExternalDadaBaseUrl = (host, db) => {
    return host + '/' + db;
};

exports.getConnection = (host, database, cb) => {
    let url = config.getConfig().mongo.url,
        poolSize = config.getConfig().mongo.poolSize;

    let options = {
        poolSize: poolSize
    };

    let externalUrl = getExternalDadaBaseUrl(host, database);
    if (externalUrl) {
        url = externalUrl;
    }

    let db = mongoose.connection;

    console.debug('Try to establish MongoDB connection on "' + url + '" with pool size: ' + poolSize);
    mongoose.connect(url, options, (err) => {
        if (err) {
            console.error('Error occurred while establishing new MongoDB connection. ' + err);
            return cb(err);
        }

        console.log('Successfully connected to MongoDB on "' + url + '" with pool size: ' + poolSize);
        cb(null, db);
    });
};
