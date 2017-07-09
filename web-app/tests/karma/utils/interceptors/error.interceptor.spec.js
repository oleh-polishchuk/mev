'use strict';

describe('ErrorInterceptor', function () {
    var ErrorInterceptor;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_ErrorInterceptor_) {
        ErrorInterceptor = _ErrorInterceptor_;
    }));

    it('should exist', (function () {
        expect(ErrorInterceptor).toBeDefined();
    }));

    it('should have property "request"', (function () {
        expect(ErrorInterceptor.request).toBeDefined();
    }));

    it('should have property "requestError"', (function () {
        expect(ErrorInterceptor.requestError).toBeDefined();
    }));

    it('should have property "response"', (function () {
        expect(ErrorInterceptor.response).toBeDefined();
    }));

    it('should have property "responseError"', (function () {
        expect(ErrorInterceptor.responseError).toBeDefined();
    }));
});
