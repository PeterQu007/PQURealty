//gulp watch task, run it : gulp watch

var gulp=require('gulp');
var watch=require('gulp-watch');
var browserSync=require('browser-sync').create();

gulp.task('watch', function(){
	
	browserSync.init({
		notify: false, //inhibit notification box/message
		server: {
			baseDir: "app"
		}
	});
	
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	
	watch('./app/styles/**/*.css', function(){
		gulp.start('cssInject');
	});
});


//assistant tasks:

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles.css')
		.pipe(browserSync.stream());
});

gulp.task("html", function(){
	browserSync.reload();
});
