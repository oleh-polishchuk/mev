// Karma configuration
// Generated on Sun Feb 26 2017 22:11:20 GMT+0200 (FLE Standard Time)

module.exports = function (config) {
    config.set({
        basePath: '../../',
        frameworks: ['jasmine'],
        files: [
            // AngularJS Dependencies
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
            './node_modules/angular/angular.min.js',
            './node_modules/angular-route/angular-route.min.js',
            './node_modules/angular-resource/angular-resource.min.js',
            './node_modules/angular-route-segment/build/angular-route-segment.js',
            './node_modules/angular-growl-v2/build/angular-growl.min.js',
            './node_modules/angular-clipboard/angular-clipboard.js',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './bower_components/angular-button-spinner/dist/angular-button-spinner.min.js',

            // AngularJS Application
            './app/app.js',
            './app/bootstrap.js',
            './app/constants.js',
            './app/config.js',
            './app/app.controller.js',
            './app/app.segment.js',
            './app/home/home.controller.js',
            './app/ip/ip.service.js',
            './app/ip/ip.modal.controller.js',
            './app/mongodb/mongodb.factory.js',
            './app/utils/services/modal.dialog.service.js',
            './app/utils/interceptors/error.interceptor.js',
            './app/utils/decorators/route.segment.decorator.js',

            // AngularJS Spec
            './tests/karma/constant.spec.js',
            './tests/karma/utils/services/modal.dialog.service.spec.js',
            './tests/karma/utils/interceptors/error.interceptor.spec.js',
            './tests/karma/mongodb/mongodb.factory.spec.js',
            './tests/karma/ip/ip.service.spec.js',
            './tests/karma/ip/ip.modal.controller.spec.js',
            './tests/karma/home/home.controller.spec.js'
        ],
        exclude: [],
        preprocessors: {},
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        client: {
            captureConsole: true
        },
        autoWatch: true,
        browsers: ['chrome_full_screen'],
        customLaunchers: {
            chrome_full_screen: {
                base: 'Chrome',
                flags: ['--start-maximized']
            },
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        singleRun: true,
        concurrency: Infinity
    });

    if (process.env.TRAVIS) {
        config.browsers = ['Chrome_travis_ci'];
    }
};
