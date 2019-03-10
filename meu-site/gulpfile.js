'use strict';

const gulp = require('gulp'),
  sass = require('gulp-sass'),
  imagemin = require('gulp-imagemin'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

//Minifica as imagens
gulp.task('imagemin', () =>
  gulp.src('src/img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/img'))
);

gulp.task('compress-js', function () {
  gulp.src('src/js/**/*.js')
    .pipe(uglify())
  gulp.dest('dist/js')
});

// Compila o sass e fica assistindo
gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
});