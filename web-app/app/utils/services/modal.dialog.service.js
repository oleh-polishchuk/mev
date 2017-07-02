/**
 * Modal Dialog Service
 * @namespace Services
 */
(function () {

    'use strict';

    angular
        .module('app')
        .service('ModalDialogService', ModalDialogService);

    function ModalDialogService($uibModal) {

        this.openIPModalWindow = openIPModalWindow;

        /**
         * Open IP modal window
         */
        function openIPModalWindow() {
            return $uibModal.open({
                animation: true,
                templateUrl: 'ip/ip.modal.html',
                controller: 'IPModalController',
                controllerAs: 'vm'
            }).result.then(function () {}, function (res) {});
        }
    }

})();
