module.exports = function() {
  $.gulp.task('img:dev', function() {
    return $.gulp.src('dev/static/img/**/*.{png,jpg}')
      .pipe($.gulp.dest('build/static/img/'))
  });

  $.gulp.task('img:build', function() {
    return $.gulp.src('dev/static/img/**/*.{png,jpg}')
      .pipe($.gp.tinypng('8Dbfbqk9V97Hd3AcNYJjgwDtObBCh5xa'))
      .pipe($.gulp.dest('build/static/img/'))
  });
};