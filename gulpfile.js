var gulp = require('gulp');

var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });

    gulp.watch("index.html").on('change', browserSync.reload);
});

gulp.task('css', function () {
    var plugins = [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ];

    return gulp
        .src('./scss/styles.scss')
        .pipe(sourcemaps.init())
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(postcss(plugins))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
    gulp.watch('./scss/styles.scss', ['css']);
});

gulp.task('default', ['css', 'sass:watch', 'serve']);
