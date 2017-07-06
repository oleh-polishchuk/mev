"use strict";

var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');


exports.dependencies = function () {
    var src = [
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        'bower_components/angular/angular.min.js',
        'bower_components/angular-route/angular-route.min.js',
        'bower_components/angular-resource/angular-resource.min.js',
        'bower_components/angular-route-segment/build/angular-route-segment.js',
        'bower_components/angular-growl-v2/build/angular-growl.min.js',
        'bower_components/angular-button-spinner/dist/angular-button-spinner.min.js',
        'bower_components/angular-clipboard/angular-clipboard.js',
        'bower_components/angular-bootstrap/ui-bootstrap.min.js',
        'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',

        'app/static/js/*.js'
    ];
    var destination = 'app/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(rename({dirname: ''}))
        .pipe(concat('dep.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(destination))
};

exports.application = function () {
    var src = [
        'app/app.js',
        'app/bootstrap.js',
        'app/constants.js',
        'app/config.js',
        'app/**/*.js',
        '!app/static/vendor/js/*.js'
    ];
    var destination = 'app/static/vendor/js/.';

    return gulp
        .src(src)
        .pipe(sourcemaps.init())
        .pipe(rename({dirname: ''}))
        .pipe(babel({presets: ['es2015']}))
        .on('error', function (e) {
            console.log('>>> ERROR', e.message);
            this.emit('end');
        })
        .pipe(ngAnnotate({single_quotes: true}))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(destination))
};
