const ExternalQueryService = require('../services/external.query.service'),
    MongoDBService = require('../services/mongo.service'),
    ResponseService = require('../services/response.service');

exports.init = (app) => {

    app.post('/api/getMongoData', (req, res) => {

        ResponseService.api.validate.params(req.body, ['host', 'db', 'sql'], (err) => {
            if (err) {
                console.warn(err);
                return ResponseService.e400(req, res);
            }

            MongoDBService.getConnection(req.body.host, req.body.db, (err, db) => {
                if (err) {
                    console.error('Unable to get connection to host: ' + req.body.host, err);
                    return ResponseService.api.error(res, 500, err.toString());
                }

                ExternalQueryService.getMongoQuery(req.body.sql, (err, data) => {
                    if (err) {
                        console.error(err);
                        return ResponseService.api.error(res, 500, err.toString());
                    }

                    let collection = data.collection;
                    let projection = data.projection;
                    let query = data.query;
                    let sort = data.sort;

                    db.collection(collection).find(query, projection).sort(sort).toArray((err, data) => {
                        db.close(() => {
                            console.log('Successfully disconnected from MongoDB.');

                            if (err) {
                                console.error('Unable to find', err);
                                return ResponseService.api.error(res, 500, err.toString());
                            }

                            ResponseService.api.success(res, data);
                        });
                    });
                });
            });
        });
    });

};

