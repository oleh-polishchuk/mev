(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController($log, $http) {
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
            vm.application.host = "localhost:27017";
            vm.application.db = "codaline";
            vm.application.sql = "select * from users where name like 'oleg'";
        }

        function submit() {
            let request = {
                url: '/api/getMongoData',
                method: 'POST',
                data: vm.application
            };

            let response = function (res) {
                if (res.data.success) {
                    vm.application.result = res.data.data;
                } else {
                    vm.application.result = res.data.error.message;
                }
            };

            $http(request).then(response);
        }

        function reset() {
            vm.application = {};
        }
    }

})();
