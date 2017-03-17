var gulp = require('gulp');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var nodemon = require('gulp-nodemon');
var bs = require('browser-sync').create();
var angularFilesort = require('gulp-angular-filesort');

gulp.task('default', ['index']);

gulp.task('index', function () {
    var target = gulp.src('./src/index.html');
    var sources = gulp.src([
        './src/selfStarted/*.js',
        './src/selfStarted/features/**/*.js',
        './src/selfStarted/features/components/**/*.html'
    ]).pipe(angularFilesort());

    return target.pipe(inject(sources, { ignorePath: 'src/', addRootSlash: false }))
        .pipe(gulp.dest('./src'));
});

gulp.task('browser-sync', ['nodemon'], function () {
    bs.init(null, {
        proxy: 'http://localhost:3000',
        port: 4000
    });
});

gulp.task('nodemon', function (cb) {
    var started = false;
    return nodemon({ script: 'server.js' })
        .on('start', function () {
            if (!started) {
                cb();
                started = true;
            }
        });
});

gulp.task('start', ['browser-sync'], function () {
    gulp.watch("./src/selfStarted/features/**/*.html").on('change', bs.reload);
    gulp.watch("./src/selfStarted/features/components/**/*.html");
    gulp.watch("./src/assets/css/*.css").on('change', bs.reload);
});