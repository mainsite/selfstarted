var gulp = require('gulp');
var gutil = require('gulp-util');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');

gulp.task('default', ['index']);

gulp.task('index', function () {
    var target = gulp.src('./src/index.html');
    var sources = gulp.src(['./src/selfStarted/*.js','./src/selfStarted/features/**/*.js']).pipe(angularFilesort());

    return target.pipe(inject(sources, { ignorePath: 'src/', addRootSlash: false }))
        .pipe(gulp.dest('./src'));
});