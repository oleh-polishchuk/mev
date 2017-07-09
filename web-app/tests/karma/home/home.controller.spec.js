'use strict';

describe('HomeController', function () {
    var HomeController;
    var $scope;
    var $log;
    var $routeSegment;
    var MongodbFactory;
    var ModalDialogService;
    var $q;
    var $httpBackend;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function (_$controller_, _$log_, _$rootScope_, _$q_, _$httpBackend_, _MongodbFactory_) {
        $scope = _$rootScope_.$new();
        $q = _$q_;
        $log = _$log_;
        $httpBackend = _$httpBackend_;
        $routeSegment = jasmine.createSpyObj('$routeSegment', ['reload']);
        ModalDialogService = jasmine.createSpyObj('ModalDialogService', ['openIPModalWindow']);
        MongodbFactory = _MongodbFactory_;

        HomeController = _$controller_('HomeController', {
            $scope: $scope,
            $log: $log,
            $routeSegment: $routeSegment,
            MongodbFactory: MongodbFactory,
            ModalDialogService: ModalDialogService
        });
    }));

    it('should exist', (function () {
        expect(HomeController).toBeDefined();
    }));

    describe('method reset()', function () {

        it('should exist', (function () {
            expect(HomeController.reset).toBeDefined();
        }));

        it('should calls the method $routeSegment.reload()', (function () {
            HomeController.reset();
            expect($routeSegment.reload).toHaveBeenCalled();
        }));
    });

    describe('method submit()', function () {

        it('should exist', (function () {
            expect(HomeController.submit).toBeDefined();
        }));

        it('should send a request and get success response', (function () {
            var response = {
                success: true,
                data: []
            };

            $httpBackend.expect('POST', '/api/mongodb/getJson').respond(200, response);

            var form = {
                loading: false
            };

            HomeController.submit(form);
            expect(form.loading).toBe(true);

            $httpBackend.flush();
            expect(form.loading).toBe(false);
            expect(Array.isArray(HomeController.application.result)).toBe(true);
            expect(Number.isInteger(HomeController.application.count)).toBe(true);
        }));

        it('should send a request and get failure response', (function () {
            var response = {
                success: false,
                error: {
                    message: 'Internal Server Error'
                }
            };

            $httpBackend.expect('POST', '/api/mongodb/getJson').respond(200, response);

            var form = {
                loading: false
            };

            HomeController.submit(form);
            expect(form.loading).toBe(true);

            $httpBackend.flush();
            expect(form.loading).toBe(false);
            expect(typeof HomeController.application.result).toBe("string");
            expect(HomeController.application.count).toBe(0);
        }));
    });

    describe('method setExample()', function () {

        it('should exist', (function () {
            expect(HomeController.setExample).toBeDefined();
        }));

        it('should set example of request', (function () {
            var example = {
                host: "127.0.0.1:27027",
                db: "test",
                sql: "select * from restaurants where address.building like '351' sort by asc skip 5 limit 5"
            };

            HomeController.setExample();

            expect(HomeController.application.host).toBe(example.host);
            expect(HomeController.application.db).toBe(example.db);
            expect(HomeController.application.sql).toBe(example.sql);
        }));
    });

    describe('method openIPModalWindow()', function () {

        it('should exist', (function () {
            expect(HomeController.openIPModalWindow).toBeDefined();
        }));

        it('should calls the method ModalDialogService.openIPModalWindow()', (function () {
            HomeController.openIPModalWindow();
            expect(ModalDialogService.openIPModalWindow).toHaveBeenCalled();
        }));
    });

});
