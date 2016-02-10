var gulp = require('gulp'),
	path = require('path'),
	sass = require('gulp-sass'),
	open = require('gulp-open'),
	browserSync = require('browser-sync').create(),
	reload      = browserSync.reload;

/* Less Task Runner*/
gulp.task('sassfile',function(){
	var cssSrc = './application/source/assets/sass/*.scss',
		cssDst = './application/build/assets/sass/';
	return gulp.src(cssSrc)
		.pipe(sass())
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest(cssDst))
		.pipe(browserSync.reload({ stream: true }));
})

//HTML runner
gulp.task('homepage', function () {
	var htmlSrc = './application/source/*.html',
		htmlDst = './application/build';
	  	return gulp.src(htmlSrc)
	    	.pipe(gulp.dest(htmlDst))
	    	.pipe(browserSync.reload({ stream: true }));
});

//Script Runner
gulp.task('scripts', function () {
	var scriptSrc = './application/source/assets/js/*.js',
		scriptDst = './application/build/assets/js';
	  	return gulp.src(scriptSrc)
	    	.pipe(gulp.dest(scriptDst))
	    	.pipe(browserSync.reload({ stream: true }));
});
//fonts Runner
gulp.task('copyfiles', function() {
    gulp.src('./application/source/assets/fonts**/*.{ttf,woff,eof,svg}')
    .pipe(gulp.dest('./application/build/assets/'));
});
gulp.task('images', function() {
    
	gulp.src('./application/source/assets/img**/*.{png,jpg,gif}')
    .pipe(gulp.dest('./application/build/assets/'));
});
  //  return gulp.src(imgSrc)
       // .pipe(plumber({
         //   errorHandler: onError
        //}))

    //    .pipe(changed(imgDst))
       // .pipe(imagemin())
  //      .pipe(gulp.dest(imgDst))
 //
//});


// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./application/build/"
        }
    });
   	
});


//gulp.watch("./application/build/").on('change', browserSync.reload);
//browserSync.reload("./application/build/*.html");

gulp.task('default', ['homepage','sassfile','browser-sync','scripts','copyfiles','images']);
