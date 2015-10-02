var gulp = require('gulp');

// SERVER
gulp.task('serve', ['html', 'sass', 'watch'], function () {
    return browserSync.init({
        server: {
            baseDir: global.path.src,
            routes: {
                '/jspm_packages': './jspm_packages',
                '/vendor': './'
            },
        },
        directory: true,
        port: 9000,
        notify: true
    });
});
