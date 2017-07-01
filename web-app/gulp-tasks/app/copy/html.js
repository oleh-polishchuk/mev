"use strict";

var gulp = require('gulp');
var rename = require('gulp-rename');


module.exports = function () {
    var src = ['app/index.tmpl.html'];

    return gulp
        .src(src, {base: './'})
        .pipe(rename({basename: 'index'}))
        .pipe(gulp.dest('./'))
};
