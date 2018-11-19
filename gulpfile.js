const fs = require('fs')
const gulp = require('gulp')
const rjsOptimize = require('gulp-requirejs-optimize')
const rjs = require('requirejs')
const clean = require('gulp-clean')
const browserSync = require('browser-sync')
const proxyMiddleware = require('http-proxy-middleware')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const concatFile = require('gulp-concat')
const uglifyJs = require('gulp-uglify')
const shell = require('gulp-shell')
const amdOptimize = require('amd-optimize')
const rev = require("gulp-rev")
const revReplace = require("gulp-rev-replace")
const htmlmin = require('gulp-htmlmin')
const jsonEditor = require('gulp-json-editor')
const babel = require('gulp-babel')
const reload = browserSync.reload
const proxy = proxyMiddleware('/services', {target: 'http://localhost:8080', changeOrigin: true})

gulp.task('rjs', function () {
  return gulp.src('src/js/ctrs/indexCtr.js')
    .pipe(requirejsOptimize({
        appDir: './src/js/',
        baseUrl: './src/js/',
        dir: 'dist'
      }
    ))
})
gulp.task('scss', function () {
  gulp.src(['src/scss/**/*.scss', '!src/scss/lib/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css'))
})

gulp.task('dev', function () {
  browserSync.init({
    server: {
      baseDir: './src',   // http服务的目录，这是根目录
      middleware: [proxy],    // 使用中间件配置代理
      index: 'html/index.html'
    },
    port: 3008
  })
  gulp.watch(['src/scss/**/*.scss', '!src/scss/lib/**/*.scss'], ['scss'])
  gulp.watch(['./src/**/*', '!src/scss/**/*.scss'], reload)
})

gulp.task('rjs', ['clean:dist'], function () {
  rjs.optimize({
    baseUrl: 'src/js',
    dir: 'dist/js',
    mainConfigFile: 'src/js/main.js',
    findNestedDependencies: false,
    preserveLicenseComments: false,
    removeCombined: false
  })
})

gulp.task('clean:dist', function () {
  return gulp.src('dist')
    .pipe(clean())
})
gulp.task('clean:uselessFile', function () {
  return gulp.src('dist/**/build.txt')
    .pipe(clean())
})

gulp.task('build:html', function () {
  let options = {
    removeComments: true,//清除HTML注释
    collapseWhitespace: true,//压缩HTML
    // collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
    // removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    minifyJS: true,//压缩页面JS
    minifyCSS: true//压缩页面CSS
  }
  return gulp.src('src/html/**/*html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('dist/html'))
})

gulp.task('rev', ['rjs', 'build:html'], function () {
    return gulp.src(['dist/js/pages/**/*.js'])
      .pipe(rev())
      .pipe(gulp.dest('dist/temp/js/pages'))
      .pipe(rev.manifest())
      .pipe(gulp.dest('dist/temp/'))
  }
)

gulp.task('revReplace', ['rev'], function () {
  let manifest = gulp.src('./dist/temp/rev-manifest.json')
    .pipe(jsonEditor(function (json) {
      let newJson = {}
      for (let key in json) {
        let list = json[key].split(/-|\./)
        newJson[key] = list[0] + '.js?v=' + list[1]
      }
      return newJson
    }))
  return gulp.src('dist/html/**/*.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('dist/html'))
})

gulp.task('babel:dev', function () {
  return gulp.src(['src/babel/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/js'))
})
