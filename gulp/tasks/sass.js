module.exports = function () {
    $.gulp.task('sass:build', () => {
        return $.gulp.src('dev/static/sass/**/*.+(sass|scss)')
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'SASS',
                    message: error.message
                };
            }))
            .pipe($.gp.autoprefixer({
                overrideBrowserslist: ['last 5 versions']
            }))
            .pipe($.group())
            .pipe($.gp.csscomb())
            .pipe($.gulp.dest('build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('sass:dev', () => {
        return $.gulp.src('dev/static/sass/**/*.+(sass|scss)')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass())
            .on('error', $.gp.notify.onError(function (error) {
                return {
                    title: 'SASS',
                    message: error.message
                };
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 5 versions']
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};