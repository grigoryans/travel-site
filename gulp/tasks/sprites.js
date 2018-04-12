var gulpik = require('gulp'),
svgSprite = require('gulp-svg-sprite');

var config = {
	mode: {
		css:{
			
		}
	}
}

gulpik.task('createSprite',function(){
	return gulpik.src('./app/assets/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulpik.dest('./app/temp/sprite/'));
})