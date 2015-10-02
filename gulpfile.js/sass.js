var gulp = require('gulp');
var plumber = require('gulp-plumber');
var handleErrors = require('./lib/errors');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Compile SASS into CSS
gulp.task('sass', function () {
    return gulp.src(global.path.scss)
        .pipe(plumber({
            errorHandler: handleErrors
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(global.path.css))
        .pipe(browserSync.stream({match: '**/*.css'}));
});
