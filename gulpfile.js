let gulp = require('gulp'),
  requirejsOptimize = require('gulp-requirejs-optimize')

gulp.task('scripts', function () {
  return gulp.src('src/js/*.js')
    .pipe(requirejsOptimize({
      baseUrl: 'src/js'
    }))
    .pipe(gulp.dest('dist'))
})
