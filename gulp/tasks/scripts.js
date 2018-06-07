var gulpik = require('gulp'),
webpack = require('webpack');

gulpik.task('scripts',function(callback){
	webpack(require('../../webpack.config.js'), function(err,stats){
 
		if(err){
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();
	});
});