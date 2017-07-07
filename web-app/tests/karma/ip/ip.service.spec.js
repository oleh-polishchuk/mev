'use strict';

describe('IPService', function () {
    var IPService;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_IPService_) {
        IPService = _IPService_;
    }));

    it('should exist', (function () {
        expect(IPService).toBeDefined();
    }));

    describe('method getLocalIp()', function () {

        it('should exist', (function () {
            expect(IPService.getLocalIp).toBeDefined();
        }));

        it('should return string', (function () {
            IPService.getLocalIp(function (ip) {
                expect(typeof ip).toBe(typeof "");
            });
        }));
    });

});
