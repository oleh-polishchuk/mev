'use strict';

describe('Constants', function () {
    let Constants;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_Constants_) {
        Constants = _Constants_;
    }));

    it('should exist', (function () {
        expect(Constants).toBeDefined();
    }));
});

describe('Endpoints', function () {
    let Endpoints;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_Endpoints_) {
        Endpoints = _Endpoints_;
    }));

    it('should exist', (function () {
        expect(Endpoints).toBeDefined();
    }));

    describe('Endpoints.API', function () {

        it('should exist', (function () {
            expect(Endpoints.API).toBeDefined();
        }));

        it('to be equals "/api"', (function () {
            expect(Endpoints.API).toEqual('/api');
        }));
    });

    describe('Endpoints.MONGODB', function () {

        it('should exist', (function () {
            expect(Endpoints.MONGODB).toBeDefined();
        }));

        it('to be equals "/api/mongodb"', (function () {
            expect(Endpoints.MONGODB).toEqual('/api/mongodb');
        }));
    });

});

