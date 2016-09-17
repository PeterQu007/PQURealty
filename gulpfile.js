var gulp=require('gulp');
var watch=require('gulp-watch');
var postcss=require('gulp-postcss');
var autoprefixer=require('autoprefixer');
var cssvars=require('postcss-simple-vars');
var cssnested=require('postcss-nested');

gulp.task("default", function(){
	console.log("test");
});

gulp.task("html", function(){
	console.log("Imagine something useful a new web site");
});

gulp.task("css", function(){
	return gulp.src('./app/styles/styles.css')
		
		.pipe(postcss([cssnested,cssvars,autoprefixer]))
		.pipe(gulp.dest('./app/temp/'));
});

gulp.task('watch', function(){
	
	watch('./app/index.html', function(){
		gulp.start('html');
	});
	
	watch('./app/styles/**/*.css', function(){
		gulp.start('css');
	});
});
