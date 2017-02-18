
var gulp=require('gulp');

var postcss=require('gulp-postcss');
var autoprefixer=require('autoprefixer');
var cssvars=require('postcss-simple-vars');
var cssnested=require('postcss-nested');
var cssImport=require('postcss-import');
var mixins=require('postcss-mixins');

gulp.task("styles", function(){
	console.log("---Update the destination stylesheet file:");
	return gulp.src('./app/styles/styles.css')
		
		.pipe(postcss([cssImport, mixins, cssvars, cssnested, autoprefixer]))
		.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/'));
});

