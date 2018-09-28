const gulp = require('gulp')
const runSequence = require('run-sequence')

// Default task to be run with `gulp`
gulp.task('default', function () {
			gulp.watch('src/css/**/*.styl', gulp.series('css-dev'))
			gulp.watch('src/html/**/*.hbs', gulp.series('html-dev'))
			gulp.watch('src/js/**/*.js', gulp.series('js-dev'))
			gulp.watch('src/assets/**/*', gulp.series('assets-dev'))
			gulp.watch('template-data/*.json', gulp.series('html-dev'))
});

gulp.task('dev', () => {
	runSequence(
		'clean-dev',
		'css-dev',
		'js-dev-critical',
		'js-dev',
		'assets-dev',
		'html-dev',
		'browser-sync'
	)
})
