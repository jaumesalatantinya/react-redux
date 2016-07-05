'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require("gulp-rename");
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

var wFiles = ['./app/*.html', './app/css/*.css', './app/dist/*.js'];
var jsFiles = ['./app/js/*.js'];
var sassFiles = ['./app/styles/*.sass', './app/styles/*.scss'];

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('rbs', function() {
    browserSync.reload();
});

gulp.task('sass', function () {
  gulp.src('./app/styles/index.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./app/dist/'));
});

gulp.task('jshint', function() {
    return gulp.src(jsFiles)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
    gulp.watch(jsFiles, ['jshint']);
    gulp.watch(wFiles, ['rbs']);
    gulp.watch(sassFiles, ['sass', 'rbs']);
});

gulp.task('default', ['watch', 'serve', 'sass', 'jshint']);
