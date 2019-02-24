const gulp = require('gulp');
const concat = require('gulp-concat');
const  sass  = require ('gulp-sass') ;
const autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');

const browserSync = require('browser-sync').create();


const cssFiles = [
'node_modules/normalize.css/normalize.css',
'src/css/index.css',
// 'src/css/some.css'
];
const jsFiles = ['src/js/other.js',
'src/js/main.js.js'
];

function styles(){
	return gulp.src(cssFiles)
	  .pipe(concat('all.css'))
	  .pipe(autoprefixer({
            browsers: ['>0.1%'],
            cascade: false
        }))
	  .pipe(cleanCSS({level:2}))
	  .pipe(gulp.dest('dest/css'))
	  .pipe(browserSync.stream());
}

function scripts(){
	return gulp.src(jsFiles)
	.pipe(concat('all.js'))
	.pipe(uglify({toplevel: true}))
	.pipe(gulp.dest('dest/js'))
	.pipe(browserSync.stream());

}

function watch(){
	 browserSync.init({
        server: {
            baseDir: "./"
        }, 
        // tunnel: true
    });

	gulp.watch('src/css/**/*.css', styles);
	gulp.watch('src/js/**/*.js', scripts);
	gulp.watch('./*.html', browserSync.reload);
}

function clean(){
	return del(['dest/*']);
}

gulp.task('del', del);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);

gulp.task('dest', gulp.series(clean,
	                 gulp.parallel(styles, scripts)));
