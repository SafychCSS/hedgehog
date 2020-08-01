module.exports = function() {
  $.gulp.task('css-min', function() {
    return $.gulp.src(['build/static/css/main.css'])
      .pipe($.gp.csso())
      .pipe($.gp.rename({suffix: '.min'}))
      .pipe($.gulp.dest('build/static/css'));
  });
};