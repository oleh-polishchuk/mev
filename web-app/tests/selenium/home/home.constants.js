var Utils = require('../general/utils');

var LocationCreateConstants = {
    BUTTONS: {
        RESET: 'Reset',
        RUN_SQL: 'Run SQL »',
    },
    APPLICATION: {
        HOST: {
            MODEL: 'vm.application.host',
            VALUE: '192.168.88.230:27017'
        },
        DB: {
            MODEL: 'vm.application.db',
            VALUE: 'codaline'
        },
        SQL: {
            MODEL: 'vm.application.sql',
            VALUE: 'select * from users where username = "oleg"'
        },
        RESULT: {
            XPATH: '/html[1]/body[1]/div[2]/div[1]/section[3]/h5[1]',
            TOTAL_COUNT: 'Total count: 1'
        }
    },
};

module.exports = LocationCreateConstants;
