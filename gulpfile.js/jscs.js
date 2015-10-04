/*
 * JavaScript code style checker
 * https://github.com/jscs-dev/gulp-jscs/
 */

var gulp = require('gulp');
var jscs = require('gulp-jscs');

// JSCS
gulp.task('jscs', function () {
    return gulp.src('./src/scripts/main.js')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(jscs({
            configPath: '.jscsrc',
            fix: true
        }))
        .pipe(gulp.dest('./src/scripts'));
});
