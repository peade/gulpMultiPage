let gulp = require('gulp'),
  requirejsOptimize = require('gulp-requirejs-optimize')

gulp.task('rjs', function () {
  return gulp.src('src/js/index.js')
    .pipe(requirejsOptimize())
    .pipe(gulp.dest('dist'));
});
