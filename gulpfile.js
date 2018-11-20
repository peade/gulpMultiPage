const gulp = require('gulp')
const rjs = require('requirejs')
const clean = require('gulp-clean')
const browserSync = require('browser-sync')
const proxyMiddleware = require('http-proxy-middleware')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')
const uglifyJs = require('gulp-uglify')
const rev = require("gulp-rev")
const revReplace = require("gulp-rev-replace")
const htmlmin = require('gulp-htmlmin')
const jsonEditor = require('gulp-json-editor')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')
const sequence = require('gulp-sequence')
const reload = browserSync.reload
const proxy = proxyMiddleware('/services', {target: 'http://localhost:8080', changeOrigin: true})
/* scss 编译 */
gulp.task('scss:dev', function () {
  gulp.src(['src/scss/**/*.scss', '!src/scss/lib/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css'))
})
/* babel 编译 */
gulp.task('babel:dev', function () {
  return gulp.src(['src/babel/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/js'))
})
/* 使用 standardjs 配置.eslintrc.json, eslint检查babel文件语法*/
gulp.task('eslint:dev', function () {
  return gulp.src(['src/babel/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.result(result => {
      console.log(1111)
      // Called for each ESLint result.
      console.log(`ESLint result: ${result.filePath}`)
      console.log(`# Messages: ${result.messages.length}`)
      console.log(`# Warnings: ${result.warningCount}`)
      console.log(`# Errors: ${result.errorCount}`)
    }))
})
/* 使用browserSync 启动本地服务，及配置请求代理转发 */
gulp.task('dev', ['babel:dev', 'eslint:dev', 'scss:dev'], function () {
  // 设置browserSync
  browserSync.init({
    server: {
      baseDir: './src',   // http服务的目录，这是根目录
      middleware: [proxy],    // 使用中间件配置代理
      index: 'html/index.html'
    },
    port: 3008
  })
  // 监听babel文件
  gulp.watch(['src/babel/**/*'], ['babel:dev', 'eslint:dev'])
  // 监听scss文件
  gulp.watch(['src/scss/**/*.scss', '!src/scss/lib/**/*.scss'], ['scss:dev'])
  // 监听文件改动，刷新页面
  gulp.watch(['./src/**/*', '!src/scss/**/*.scss', '!src/babel/**/*'], reload)
})
/* 执行requirejs 优化 这个地方，我没弄懂，所以暂时就这么放着 */
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
/* 清空dist文件夹 */
gulp.task('clean:dist', function () {
  return gulp.src('dist')
    .pipe(clean())
})
/* 打包成功后，清除dist文件夹里的无关文件 */
gulp.task('clean:afterbuild', function () {
  return gulp.src(['dist/**/build.txt', 'dist/temp'])
    .pipe(clean())
})
/* 打包html文件 */
gulp.task('html:build', function () {
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
/* 打包scss文件 */
gulp.task('scss:build', function () {
  gulp.src(['src/scss/**/*.scss', '!src/scss/lib/**/*.scss'])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/css'))
})
/* 打包babel的js文件 */
gulp.task('babel:build', function () {
  return gulp.src(['src/babel/**/*.js'])
    .pipe(babel())
    .pipe(uglifyJs())
    .pipe(gulp.dest('dist/js'))
})
/* 打包图片文件 */
gulp.task('img:build', function () {
  return gulp.src(['src/images/**/*'])
    .pipe(gulp.dest('dist/images'))
})
/* 打包js文件夹里的lib文件 */
gulp.task('jslib:build', function () {
  return gulp.src(['src/js/lib/**/*'])
    .pipe(gulp.dest('dist/js/lib'))
})
/* 文件重命名，生成相应的manifest.json */
gulp.task('rev', function () {
  return gulp.src(['dist/**/*.js', 'dist/**/*.css', '!dist/js/lib/**/*'])
    .pipe(rev())
    .pipe(gulp.dest('dist/temp/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist/temp/'))
})
/* 改版html里css和js的版本号 */
gulp.task('revReplace', ['rev'], function () {
  let manifest = gulp.src('./dist/temp/rev-manifest.json')
    .pipe(jsonEditor(function (json) {
      let newJson = {}
      for (let key in json) {
        let list = json[key].split(/-|\./)
        if (list[2] === 'js') {
          newJson[key] = list[0] + '.js?v=' + list[1]
        } else if (list[2] === 'css') {
          newJson[key] = list[0] + '.css?v=' + list[1]
        }
      }
      return newJson
    }))
  return gulp.src('dist/html/**/*.html')
    .pipe(revReplace({manifest: manifest}))
    .pipe(gulp.dest('dist/html'))
})
/* 打包，使用sequence控制执行顺序*/
gulp.task('buildProd', sequence('clean:dist', ['img:build', 'html:build', 'scss:build', 'babel:build', 'jslib:build'], 'rev', 'revReplace', 'clean:afterbuild'))
