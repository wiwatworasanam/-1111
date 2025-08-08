// var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    cssnano = require('gulp-cssnano'),
    notify = require('gulp-notify'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    imageop = require('gulp-image-optimization');

function css() {

 return  gulp.src('resources/assets/sass/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer('last 2 version'))
 //       .pipe(cssnano())
	.pipe(gulp.dest('./public/css/'))
	.pipe(notify({ message: 'frontend css complete', onLast: true}));
}
function cssBack() {
 return gulp.src('resources/assets/sass/backend/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer('last 2 version'))
	.pipe(gulp.dest('./public/css'))
	.pipe(notify({ message: 'backend css complete', onLast: true}));
}

function clean() {
    return del(['css']);
}

//Watch task
function watch() {
    gulp.watch('resources/assets/**/*',css);
    gulp.watch('resources/assets/**/*',cssBack);
}

exports.css = css;
exports.cssBack = cssBack;
exports.watch = watch;
exports.clean = clean;

//gulp.task('default',['clean'], function() {
////   gulp.src('resources/assets/js/**/*.js')
////       // .pipe(uglify())
////       .pipe(gulp.dest('./public/js/'));
//
//	gulp.src('resources/assets/sass/*.scss')
//		 .pipe(sass({
//		   sourceComments: 'map',
//		   sourceMap: 'sass',
//		   outputStyle: 'nested'
//		 })).on('error', sass.logError)
//		.pipe(autoprefixer('last 2 version'))
// //       .pipe(cssnano())
//		.pipe(gulp.dest('./public/css/'))
//		.pipe(notify({ message: 'frontend css complete', onLast: true}));
//
//	gulp.src('resources/assets/sass/backend/*.scss')
//		.pipe(sass().on('error', sass.logError))
//		.pipe(autoprefixer('last 2 version'))
//		.pipe(gulp.dest('./public/css'))
//		.pipe(notify({ message: 'backend css complete', onLast: true}));
//});
//
//gulp.task('clean', function() {
//	return del(['css']);
//});
//gulp.task('clean-js', function() {
//	return del(['./public/js/resource-all.js', './public/js/public-all.js', './public/js/backend/backend-all.js'])
//});
//
////Watch task
//gulp.task('watch',function() {
//	gulp.watch('resources/assets/**/*',['default']);
//});
