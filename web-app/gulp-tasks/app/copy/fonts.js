"use strict";

var gulp = require('gulp');
var rename = require('gulp-rename');


module.exports = function () {
    var src = [
        'node_modules/bootstrap/dist/fonts/*.*',
        'node_modules/font-awesome/fonts/*.*',
        'app/static/fonts/*.*'
    ];
    var destination = 'app/static/vendor/fonts/.';

    return gulp
        .src(src)
        .pipe(rename({dirname: ''}))
        .pipe(gulp.dest(destination))
};
