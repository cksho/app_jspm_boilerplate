var gulp = require('gulp');

gulp.task('watch', function () {
    // watch tasks
    gulp.watch(global.path.html, ['html', browserSync.reload]);
    gulp.watch(global.path.json, ['html', browserSync.reload]);
    gulp.watch(global.path.scss, ['sass']);
    gulp.watch(global.path.js, browserSync.reload);
});