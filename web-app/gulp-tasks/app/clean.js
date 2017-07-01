"use strict";

var gulp = require('gulp');
var clean = require('gulp-clean');


module.exports = function() {
    var src = [
        'app/index.html',
        'app/static/vendor/*'
    ];

    return gulp
        .src(src, {read: false, allowEmpty: true})
        .pipe(clean())
};
