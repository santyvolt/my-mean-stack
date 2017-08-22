const gulp = require("gulp");
const watch = require("gulp-watch");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const cssmin = require('gulp-clean-css');
const connect = require('gulp-connect');
const nodemon = require('gulp-nodemon');
const minify = require('gulp-minify');
const rename = require('gulp-rename');

function swallowError(error) {
    console.log(error.toString());
    this.emit('end');
}

var paths = {
    src: {
        root: 'client',
        js: 'client/**/*.js',
        css: 'client/**/*.scss',
        html: 'client/**/*.html'
    },
    dest: {
        root: 'public',
        jsFile: 'app.js',
        jsFileMin: 'app.min.js',
        jsFolder: 'public/js/',
        cssFile: 'app.css',
        cssFileMin: 'app-min.css',
        cssFolder: 'public/css/',
        htmlFolder: 'public/views/'
    }
}

gulp.task('sync-html', function () {
    gulp.src(paths.src.html) // paths to your files
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(rename({
            dirname: ''
        }))
        .pipe(htmlmin())
        .pipe(gulp.dest(paths.dest.htmlFolder))
        .on('error', swallowError);
});

gulp.task("sync-js", [], function () {
    gulp.src(paths.src.js)
        .pipe(concat(paths.dest.jsFile))
        .pipe(gulp.dest(paths.dest.jsFolder))
        .pipe(uglify())
        .pipe(minify())
        .pipe(gulp.dest(paths.dest.jsFolder))
        .on('error', swallowError);
});

gulp.task("sync-css", [], function () {
    gulp.src(paths.src.css)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(concat(paths.dest.cssFile))
        .pipe(gulp.dest(paths.dest.cssFolder))
        .pipe(cssmin())
        .pipe(concat(paths.dest.cssFileMin))
        .pipe(gulp.dest(paths.dest.cssFolder));
});

gulp.task('build', ["sync-html", "sync-js", "sync-css"], function () {});


gulp.task('watch', ['build'], function () {
    gulp.watch(paths.src.js, ["sync-js"]);
    gulp.watch(paths.src.css, ["sync-css"]);
    gulp.watch(paths.src.html, ["sync-html"]);
});

gulp.task('default', ["watch"]);