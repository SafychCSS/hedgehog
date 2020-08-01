module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('dev/static/sass/**/*.+(sass|scss)', $.gulp.series('sass:dev'))
    $.gulp.watch('dev/**/*.html', $.gulp.series('html'))
    $.gulp.watch('dev/static/js/*.js', $.gulp.series('scripts'))
    $.gulp.watch('dev/static/img/**/*', $.gulp.series('img:dev'))
  });
}