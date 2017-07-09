(function () {

    'use strict';

    angular
        .module('app', [
            'ngRoute',
            'ngResource',
            'route-segment',
            'view-segment',
            'angular-growl',
            'angular-button-spinner',
            'angular-clipboard',
            'ui.bootstrap'
        ])
        .run(['$log', function ($log) {
            $log.debug('app is running...');
        }]);
})();
