/*
* 清除dist目录
*
* */
const cfg = global.cfg
// const path = require('path')
const gulp = require('gulp')
// const shell = require('gulp-shell')
// const gulpif = require('gulp-if')
// const plumber = require('gulp-plumber')
const clean = require('gulp-clean')


gulp.task('devClean', function () {
  return gulp.src('dev')
    .pipe(clean())
})

// windows
function gulpClean () {
  return gulp.src(cfg.distPath)
    .pipe(clean())
}


/*
// 非windows
function gulpClean() {
  return gulp.src(cfg.distPath)
    .pipe(shell(['rm -rf ' + cfg.distPath]))
}
*/

module.exports = gulpClean
