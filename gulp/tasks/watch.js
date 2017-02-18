var gulp=require('gulp');
var watch=require('gulp-watch');
var browserSync=require('browser-sync').create();

gulp.task('watch', function(){
	
	browserSync.init({
		notify: false,
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

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles.css')
		.pipe(browserSync.stream());
});

gulp.task("html", function(){
	browserSync.reload();
});
