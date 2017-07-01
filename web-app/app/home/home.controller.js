(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController($log, $http, $routeSegment, MongodbFactory) {
        const vm = this;

        vm.application = {};

        vm.setExample = setExample;
        vm.submit = submit;
        vm.reset = reset;

        activate();

        function activate() {
            $log.debug('Init HomeController ...');
        }

        function setExample() {
            vm.application.host = "127.0.0.1:27017";
            vm.application.db = "codaline";
            vm.application.sql = "select * from users where username like 'oleg'";
        }

        function submit() {
            let response = function (res) {
                vm.form.loading = false;
                if (res.success) {
                    vm.application.result = res.data;
                } else {
                    vm.application.result = res.error.message;
                }
            };

            vm.form.loading = true;
            MongodbFactory.getJson(vm.application).$promise.then(response);
        }

        function reset() {
            $routeSegment.chain[$routeSegment.chain.length - 1].reload();
        }
    }

})();
