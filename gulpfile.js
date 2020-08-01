'use strict';

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  group: require('gulp-group-css-media-queries'),
  browserSync: require('browser-sync').create(),
  del: require('del'),

  path: {
    tasks: require('./gulp/config/tasks.js')
  }
};

$.path.tasks.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('sass:dev', 'html', 'scripts', 'img:dev'),
  $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series('clean',
  $.gulp.parallel('sass:build', 'html', 'scripts', 'font', 'img:build')
));