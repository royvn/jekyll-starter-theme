'use strict';

var gulp = require('gulp');

const { src, dest } = gulp;
var sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('assets/css'));
});

exports.default = function() {
  return src('src/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(rename('bundle.min.js'))
    // .pipe(uglify())
    .pipe(dest('assets/js/'));
}