/**
 * Mongodb Factory
 * @namespace Factories
 */
(() => {

    'use strict';

    angular
        .module('app')
        .factory('MongodbFactory', MongodbFactory);

    function MongodbFactory($resource, Endpoints) {

        return $resource(Endpoints.MONGODB, null, {
            'getJson': {
                method: 'POST',
                url: `${Endpoints.MONGODB}/getJson`,
                params: {
                    'host': '@host',
                    'db': '@db',
                    'sql': '@sql'
                }
            }
        });
    }
})();
