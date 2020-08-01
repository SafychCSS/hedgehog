module.exports = function() {
  $.gulp.task('html', function() {
    return $.gulp.src(['dev/**/*.html', '!dev/blocks/*.html'])
      .pipe($.gp.rigger())
      .pipe($.gulp.dest('build/'))
      .pipe($.browserSync.reload({
        stream: true
      }))
  });
}