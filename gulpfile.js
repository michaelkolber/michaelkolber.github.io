var gulp = require('gulp');

var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('serve', function() {
    browserSync.init({
        server: true
    });

    gulp.watch("scss/*.scss", ['css']);
    gulp.watch("index.html").on('change', browserSync.reload);
    gulp.watch("assets/js/*.js").on('change', browserSync.reload);
});

gulp.task('css', function () {
    var plugins = [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ];

    return gulp
        .src('./scss/*.scss')
        .pipe(sourcemaps.init())
            .pipe(sass.sync().on('error', sass.logError))
            .pipe(postcss(plugins))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
