var gulpik = require('gulp'),
/*css Copy*/
postcss = require('gulp-postcss'),
/*css Copy through filters*/
autoprefixer = require('autoprefixer'),   // -webkit-
cssVars = require('postcss-simple-vars'), // css vars
nested = require('postcss-nested'),		  // .a{ .b{ } }
cssImport = require('postcss-import'),	  // @import
mixins = require('postcss-mixins');		  // @madia

gulpik.task('css',function(){
	
	/*USING css copy filter makers*/
	return gulpik.src('./app/assets/styles/style.css')
		.pipe(postcss([cssImport,mixins,cssVars,nested,autoprefixer]))
		.on('error',function(errorinfo){
			console.log(errorinfo.toString());
			this.emit('end');
		})
		.pipe(gulpik.dest('./app/temp/styles'));
});