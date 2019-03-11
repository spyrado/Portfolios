'use strict';

const gulp = require('gulp')
  ,sass = require('gulp-sass')
  ,imagemin = require('gulp-imagemin')
  ,uglify = require('gulp-uglify')
  ,browserSync = require('browser-sync').create()
  ,autoprefixer = require('gulp-autoprefixer')
  ,cleanCSS = require('gulp-clean-css');

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

//Autoprefixa o css
gulp.task('autoprefixer-css', () => {
  console.log('---- AUTOPREFIXANDO ARQUIVOS CSS  E JOGANDO DE SRC/CSS PARA DIST/CSS----');
  return gulp.src('src/css/estilos.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('minify-css', gulp.series('autoprefixer-css',(done) => {
  console.log('---- MINIFICANDO ARQUIVOS CSS DE DIST/CSS ----');
  gulp.src('dist/css/estilos.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/'));
    done();
}));

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});