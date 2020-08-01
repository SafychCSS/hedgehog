module.exports = function() {
  $.gulp.task('sprite', function() {
    var spriteData = $.gulp.src('dev/static/img/sprite/*.png')
    .pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: '_sprite.scss',
      padding: 10
    }));
    spriteData.css.pipe($.gulp.dest('dev/static/sass/'));
    return spriteData.img.pipe($.gulp.dest('dev/static/img/'));
  });
};