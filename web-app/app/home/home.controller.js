(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController($log, $routeSegment, MongodbFactory, ModalDialogService) {
        const vm = this;

        vm.application = {};

        vm.openIPModalWindow = openIPModalWindow;
        vm.setExample = setExample;
        vm.submit = submit;
        vm.reset = reset;

        activate();

        function activate() {
            $log.debug('Init HomeController ...');
        }

        function openIPModalWindow() {
            ModalDialogService.openIPModalWindow();
        }

        function setExample() {
            let example = {
                host: "127.0.0.1:27027",
                db: "test",
                sql: "SELECT name, address.building, address.zipcode, borough, grades " +
                "FROM users WHERE address.zipcode = '10462' OR address.zipcode = '11225' " +
                "ORDER BY name DESC " +
                "LIMIT 200"
            };

            vm.application = example;
        }

        function submit(form) {
            let response = function (res) {
                form.loading = false;
                if (res.success) {
                    vm.application.result = res.data;
                    vm.application.count = vm.application.result.length;
                } else {
                    vm.application.result = res.error.message;
                    vm.application.count = 0;
                }
            };

            form.loading = true;
            MongodbFactory.getJson(vm.application).$promise.then(response);
        }

        function reset() {
            $routeSegment.reload();
        }
    }

})();
