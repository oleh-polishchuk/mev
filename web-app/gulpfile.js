"use strict";

const gulp = require('gulp');

/* ------------------------------------------ */
/*                   App                      */
/* ------------------------------------------ */

// Main stream
gulp.task('app:clean', require('./gulp-tasks/app/clean'));
gulp.task('app:copy:fonts', require('./gulp-tasks/app/copy/fonts'));
gulp.task('app:copy:html', require('./gulp-tasks/app/copy/html'));
gulp.task('app:copy:images', require('./gulp-tasks/app/copy/images'));
gulp.task('app:copy:scripts:dependencies', require('./gulp-tasks/app/copy/scripts').dependencies);
gulp.task('app:copy:scripts:application', require('./gulp-tasks/app/copy/scripts').application);
gulp.task('app:copy:scripts', gulp.parallel('app:copy:scripts:dependencies', 'app:copy:scripts:application'));
gulp.task('app:copy:styles', require('./gulp-tasks/app/copy/styles'));
gulp.task('app:update-src-links', require('./gulp-tasks/app/update.src.links'));

// Main task
gulp.task('build:app', gulp.series(
    'app:clean',
    'app:copy:fonts',
    'app:copy:html',
    'app:copy:images',
    'app:copy:scripts',
    'app:copy:styles',
    'app:update-src-links'
));


/* ------------------------------------------ */
/*                 General                    */
/* ------------------------------------------ */

gulp.task('default', gulp.parallel(
    'build:app'
));
