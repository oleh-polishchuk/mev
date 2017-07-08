var yargs = require('yargs').argv;

var Config = {

    /**
     * Host, which be used by protractor to testing
     */
    HOST: yargs.host || 'http://localhost:9990',

    /**
     * Timeout coefficient
     *
     * @description Need to increase or decrease default timeout constants
     */
    COEFFICIENT: yargs.coefficient || 1,

    /**
     * Basic timeout to wait until page will be loaded
     */
    TIMEOUT: {
        DEFAULT: (yargs.coefficient || 1) * 3000,
        SHORT: (yargs.coefficient || 1) * 1000,
        LONG: (yargs.coefficient || 1) * 6000,
        VERY_LONG: (yargs.coefficient || 1) * 9000
    }
};

if (yargs.host) {
    console.log('\n==> Default host was changed from http://localhost:9990 to ' + Config.HOST);
}

if (yargs.coefficient) {
    console.log('\n==> Default timeout coefficient was changed from 1.0 to ' + Config.COEFFICIENT);
    console.log('- DEFAULT was changed from 3000ms to ' + Config.TIMEOUT.DEFAULT + 'ms');
    console.log('- SHORT was changed from 1000ms to ' + Config.TIMEOUT.SHORT + 'ms');
    console.log('- LONG was changed from 6000ms to ' + Config.TIMEOUT.LONG + 'ms');
    console.log('- VERY_LONG was changed from 9000ms to ' + Config.TIMEOUT.VERY_LONG + 'ms');
}

module.exports = Config;