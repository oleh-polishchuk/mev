"use strict";

var gulp = require('gulp');


module.exports = function () {
    var src = [
        'app/static/images/*',
        'app/static/images/**/*'
    ];
    var destination = 'app/static/vendor/images/.';

    return gulp
        .src(src)
        .pipe(gulp.dest(destination))
};
