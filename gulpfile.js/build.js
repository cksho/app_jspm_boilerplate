/*
 * Build task
 *
 */

var gulp = require('gulp');
var exec = require('child_process').execSync;

// Build JS for distribution.
gulp.task('buildjs', function () {
    exec('jspm bundle-sfx src/app/index.js dist/app.min.js --minify --skip-source-maps', function (err, stdout, stderr) {
        if (err) {
            throw err;
        }
        else {
            console.log(stdout);
        }
    });
});
