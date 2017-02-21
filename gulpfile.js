'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
// const sassGlob = require('gulp-sass-glob');

const paths = {
    sass: './src/sass/**/*.scss',
    buildScss: 'dist/'
};

gulp.task('sass', function() {
    // nested | expanded | compact | compressed
    let style = {outputStyle: 'compressed'};
    
    return gulp.src(paths.sass)
        // .pipe(sassGlob())
        .pipe(sass(style).on('error', sass.logError))
        .pipe(gulp.dest(paths.buildScss))
})

gulp.task('default', ['sass'])