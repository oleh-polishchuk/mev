"use strict";

var gulp = require('gulp');
var rename = require('gulp-rename');


module.exports = function () {
    var src = [
        'bower_components/bootstrap/dist/fonts/*.*',
        'bower_components/font-awesome/fonts/*.*',
        'app/static/fonts/*.*'
    ];
    var destination = 'app/static/vendor/fonts/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(destination))
};
