'use strict';

describe('ModalDialogService', function () {
    let ModalDialogService;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_ModalDialogService_) {
        ModalDialogService = _ModalDialogService_;
    }));

    it('should exist', (function () {
        expect(ModalDialogService).toBeDefined();
    }));

    it('ModalDialogService.openIPModalWindow should exist', (function () {
        expect(ModalDialogService.openIPModalWindow).toBeDefined();
    }));
});
