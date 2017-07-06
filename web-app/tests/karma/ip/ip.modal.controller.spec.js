'use strict';

describe('IPModalController', function () {
    let IPModalController;
    let $scope;
    let growl;
    let $uibModalInstance;
    let IPService;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_$controller_, _$rootScope_, _IPService_) {
        $scope = _$rootScope_.$new();
        IPService = _IPService_;

        growl = jasmine.createSpyObj('growl', ['success', 'error']);
        $uibModalInstance = jasmine.createSpyObj('$uibModalInstance', ['close']);
        spyOn(IPService, 'getLocalIp');

        IPModalController = _$controller_('IPModalController', {
            $scope: $scope,
            $uibModalInstance: $uibModalInstance,
            growl: growl,
            IPService: IPService
        });
    }));

    it('should exist', (function () {
        expect(IPModalController).toBeDefined();
    }));

    describe('method close()', function () {

        it('should exist', (function () {
            expect(IPModalController.close).toBeDefined();
        }));

        it('should calls the method $uibModalInstance.close()', (function () {
            IPModalController.close();
            expect($uibModalInstance.close).toHaveBeenCalled();
        }));
    });

    describe('method copySuccess()', function () {

        it('should exist', (function () {
            expect(IPModalController.copySuccess).toBeDefined();
        }));

        it('should calls the method growl.success()', (function () {
            IPModalController.copySuccess();
            expect(growl.success).toHaveBeenCalled();
        }));
    });

    describe('method copyFail()', function () {

        it('should exist', (function () {
            expect(IPModalController.copyFail).toBeDefined();
        }));

        it('should calls the method growl.error()', (function () {
            IPModalController.copyFail();
            expect(growl.error).toHaveBeenCalled();
        }));
    });

});
