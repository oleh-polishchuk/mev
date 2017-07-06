(() => {

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
        .run(['$log', ($log) => {
            $log.debug('app is running...');
        }]);
})();
