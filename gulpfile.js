'use strict';

var gulp = require('gulp'),
    mainBowerFiles = require('main-bower-files'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    plumber = require('gulp-plumber');

// Объект с путями
var path = {
    vendor: {
        js: 'source/js/vendor/',
        css: 'source/css/vendor/'
    },
    build: {
        html: 'build/',
        js: 'build/js/',
        scss: 'build/css/',
        css: 'build/css/',
        img: 'build/images/',
        fonts: 'build/fonts/',
        pug: 'build/'
    },
    source: {
        html: 'source/*.html',
        js: 'source/js/*.js',
        scss: 'source/styles/**/*.scss',
        css: 'source/css/*.css',
        img: 'source/images/**/*.*',
        fonts: 'source/fonts/**/*.*',
        pug: 'source/template/index.pug'
    },
    watch: {
        html: 'source/**/*.html',
        js: 'source/js/**/*.js',
        scss: 'source/styles/**/*.scss',
        css: 'source/css/**/*.css',
        img: 'source/images/**/*.*',
        fonts: 'source/fonts/**/*.*'
    },
    clean: './build'
};

// Server
var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 8081,
    logPrefix: "IS"
};

gulp.task('vendorJs:build', function () {
    return gulp.src(mainBowerFiles('**/*.js'))
        .pipe(gulp.dest(path.vendor.js))
        .pipe(gulp.dest(path.build.js));
});

gulp.task('vendorCss:build', function () {
    return gulp.src( mainBowerFiles('**/*.css'))
        .pipe(gulp.dest(path.vendor.css))
        .pipe(gulp.dest(path.build.css));
});

gulp.task('pug:build', function buildHTML() {
    return gulp.src(path.source.pug)
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(path.build.pug))
        .pipe(reload({stream: true}));
});

gulp.task('js:build', function () {
    return gulp.src(path.source.js)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});
//
gulp.task('scss:build', function () {
    return gulp.src(path.source.scss)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.scss))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});
//
gulp.task('css:build', function () {
    return gulp.src(path.source.css)
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});
//
gulp.task('image:build', function () {
    return gulp.src(path.source.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});
//
gulp.task('fonts:build', function() {
    return gulp.src(path.source.fonts)
        .pipe(gulp.dest(path.build.fonts))
});
//
gulp.task('build', gulp.parallel(
    'vendorCss:build',
    'vendorJs:build',
    'pug:build',
    'js:build',
    'scss:build',
    'css:build',
    'fonts:build',
    'image:build'
));

//
gulp.task('watch', function(){
    gulp.watch('source/template/**/*.pug', gulp.series('pug:build'));
    gulp.watch(path.watch.scss, gulp.series('scss:build'));
    gulp.watch(path.watch.css, gulp.series('css:build'));
    gulp.watch(path.watch.js, gulp.series('js:build'));
    gulp.watch(path.watch.img, gulp.series('image:build'));
    gulp.watch(path.watch.fonts, gulp.series('fonts:build'));
});
//
gulp.task('server', function () {
    return browserSync(config);
});
//
gulp.task('clean', function (cb) {
     return rimraf(path.clean, cb);
});

gulp.task('default', gulp.series(
    'clean',
    'build',
    gulp.parallel(
        'watch',
        'server'
    )
));
