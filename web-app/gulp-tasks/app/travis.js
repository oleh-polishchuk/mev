"use strict";

var gulp = require('gulp');
var babel = require('gulp-babel');


module.exports = function() {
    var src = [
        'app/*.js',
        'app/**/*.js',
    ];

    return gulp
        .src(src, {base: './'})
        .pipe(babel({presets: ['es2015']}))
        .on('error', function (e) {
            console.log('>>> ERROR', e.message);
            this.emit('end');
        })
        .pipe(gulp.dest('./'))
};
