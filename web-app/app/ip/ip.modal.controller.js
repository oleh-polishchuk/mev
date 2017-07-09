/**
 * IP Modal Controller
 * @namespace Controllers
 */
(() => {

    'use strict';

    angular
        .module('app')
        .controller('IPModalController', IPModalController);

    function IPModalController($uibModalInstance, growl, IPService) {
        const vm = this;

        vm.ip = {};
        vm.copySuccess = copySuccess;
        vm.copyFail = copyFail;
        vm.close = close;

        activate();

        function activate() {
            IPService.getLocalIp((ip) => {
                vm.ip.local = ip;
            });
        }

        function copySuccess() {
            growl.success('IP copied successfully');
        }

        function copyFail(err) {
            growl.error('Copying IP failed:', err);
        }

        function close(data) {
            $uibModalInstance.close(data);
        }
    }

})();
