module.exports = function() {
  $.gulp.task('font', function() {
    return $.gulp.src('dev/static/fonts/**/*')
      .pipe($.gulp.dest('build/static/fonts/'))
  });
};