/**
 * App Config
 */
(() => {

    'use strict';

    angular
        .module('app')
        .config(config);

    function config($httpProvider, $qProvider, $logProvider, $locationProvider, growlProvider) {
        $httpProvider.interceptors.push('ErrorInterceptor');
        $httpProvider.defaults.withCredentials = true;

        // Hide annoying messages about possibly unhandled rejection
        $qProvider.errorOnUnhandledRejections(false);

        // Configure application logs messages
        $logProvider.debugEnabled(true);

        // Configure prefix for hash part
        $locationProvider.hashPrefix('');

        growlProvider.globalTimeToLive({success: 1000, error: 2000, warning: 3000, info: 4000});
        growlProvider.globalPosition('top-center');

        // Time to live Countdown
        growlProvider.globalDisableCountDown(true);
    }
})();
