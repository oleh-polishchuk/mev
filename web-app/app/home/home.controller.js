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
                sql: "select * from restaurants where address.building like '351' sort by asc skip 5 limit 5"
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
