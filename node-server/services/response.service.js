var MESSAGES = require('../i18n/en.json');

var handleError = function (req, res, error) {
    res.status(error.code);

    if (req.path.indexOf('/api/') == 0) {
        exports.api.error(res, error.code, error.message);
    } else {
        res.render('error', error);
    }
};

/**
 * Send 400 Error response
 * @param req
 * @param res
 */
exports.e400 = function (req, res) {
    handleError(req, res, {code: 400, message: MESSAGES['error.400']});
};

/**
 * Send 403 Error response
 * @param req
 * @param res
 */
exports.e403 = function (req, res) {
    handleError(req, res, {code: 403, message: MESSAGES['error.403']});
};

/**
 * Send 404 Error response
 * @param req
 * @param res
 */
exports.e404 = function (req, res) {
    handleError(req, res, {code: 404, message: MESSAGES['error.404']});
};

/**
 * Send 500 Error response
 * @param req
 * @param res
 */
exports.e500 = function (req, res) {
    handleError(req, res, {code: 500, message: MESSAGES['error.500']});
};

exports.api = {
    validate: {
        /**
         * Validate API parameters
         * @param obj
         * @param params
         * @param cb
         */
        params: function (obj, params, cb) {
            for (var i = 0; i < params.length; i++) {
                var name = params[i];
                if (!obj || !obj.hasOwnProperty(name)) {
                    return cb(new Error('Required field ' + name + ' is missing'));
                }
            }
            cb();
        }
    },

    /**
     * Send API error response
     * @param res
     * @param code
     * @param message
     */
    error: function (res, code, message) {
        res.json({
            success: false,
            error: {
                code: code,
                message: message
            }
        })
    },

    /**
     * Send API success response
     * @param res
     * @param data
     */
    success: function (res, data) {
        res.json({
            success: true,
            data: data
        })
    }
};
