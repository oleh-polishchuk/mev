'use strict';

describe('MongodbFactory', function () {
    var MongodbFactory;
    var $q;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_MongodbFactory_, _$q_) {
        MongodbFactory = _MongodbFactory_;
        $q = _$q_;
    }));

    it('should exist', (function () {
        expect(MongodbFactory).toBeDefined();
    }));

    describe('method getJson()', function () {

        it('should exist', (function () {
            expect(MongodbFactory.getJson).toBeDefined();
        }));


        it('should return promise', (function () {
            var deferred = $q.defer();
            expect(MongodbFactory.getJson().$promise).toEqual(deferred.promise);
        }));
    });

});
