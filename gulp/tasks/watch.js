var gulpik = require('gulp'),
watch = require('gulp-watch'),
/*Browser Sync*/
browserSynk = require('browser-sync').create();

// ______________Using tasks in a new task 'watch'
// ______________WATCH PLUGIN

gulpik.task('watch',function(){

	browserSynk.init({
		notify:false, // hiding the message at top right		
		server:{
			baseDir: "app"
		}
	})

	watch('./app/index.html',function(){
		browserSynk.reload();
	});

	watch('./app/assets/styles/**/*.css',function(){
		gulpik.start('cssInject');
	});

});
//Reload page when css is changed
// but firsty do the task named 'css'

gulpik.task('cssInject', ['css'], function(){
	return gulpik.src('./app/temp/styles/style.css')
		.pipe(browserSynk.stream());
})