/**
 * Constants & Endpoints
 */
(function () {

    'use strict';

    angular
        .module('app')
        .constant('Constants', Constants())
        .constant('Endpoints', Endpoints());

    function Constants() {
        let constants = {};

        return constants;
    }

    function Endpoints() {
        let endpoints = {
            API: '/api'
        };

        // GET DATA FROM MONGO
        endpoints.MONGODB = endpoints.API + '/mongodb';

        return endpoints;
    }

})();
