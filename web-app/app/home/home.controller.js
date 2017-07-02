(() => {

    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    function HomeController($log, $routeSegment, MongodbFactory, ModalDialogService) {
        const vm = this;

        vm.application = {};

        vm.openIPModalWindow = ModalDialogService.openIPModalWindow;

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
            vm.application.sql = "select * from users where address.building like '351' sort by asc skip 5 limit 5";
        }

        function submit() {
            let response = function (res) {
                vm.form.loading = false;
                if (res.success) {
                    vm.application.result = res.data;
                    vm.application.count = vm.application.result.length;
                } else {
                    vm.application.result = res.error.message;
                    vm.application.count = 0;
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
