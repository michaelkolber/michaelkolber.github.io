var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('css', function () {
    return gulp
        .src('./scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/styles.scss', ['css']);
});

gulp.task('default', ['css', 'sass:watch', 'serve']);
