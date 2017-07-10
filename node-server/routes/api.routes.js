const MongodbService = require('../services/mongo.service'),
    ResponseService = require('../services/response.service'),
    ExternalQueryService = require('../services/external.query.service');

exports.init = (app) => {

    app.post('/api/mongodb/getJson', (req, res) => {
        ResponseService.api.validate.params(req.body, ['host', 'db', 'sql'], (err) => {
            if (err) {
                console.warn(err);
                return ResponseService.e400(req, res);
            }

            MongodbService.getConnection(req.body.host, req.body.db, (err, db) => {
                if (err) {
                    console.error('Unable to get connection to host: ' + req.body.host, err);
                    return ResponseService.api.error(res, 500, err.toString());
                }

                console.log('SQL: ', req.body.sql);
                ExternalQueryService.getMongoQuery(req.body.sql, (err, data) => {
                    if (err) {
                        db.close(() => {
                            console.log('Successfully disconnected from MongoDB.')
                        });

                        console.error(err);
                        return ResponseService.api.error(res, 500, err.toString());
                    }

                    if (!data) {
                        db.close(() => {
                            console.log('Successfully disconnected from MongoDB.')
                        });

                        console.error('Bad query.');
                        return ResponseService.api.error(res, 500, 'Bad query.');
                    }

                    let collection = data.collection;
                    let projection = data.projection;
                    let query = data.query;
                    let sort = data.sort;
                    let limit = 0;
                    let groupBys = data.groupBys;

                    if (data.limit && data.limit > 0) {
                        limit = data.limit;
                    }

                    db.collection(collection)
                        .find(query, projection, groupBys)
                        .limit(limit)
                        .sort(sort)
                        .toArray((err, data) => {
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
