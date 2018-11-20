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

gulp.task('scss:dev', function () {
  gulp.src(['src/scss/**/*.scss', '!src/scss/lib/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css'))
})
gulp.task('babel:dev', function () {
  return gulp.src(['src/babel/**/*.js'])
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/js'))
})

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
  gulp.watch(['./src/**/*', '!src/scss/**/*.scss', '!src/babel/**/*'], reload)
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
gulp.task('clean:afterbuild', function () {
  return gulp.src(['dist/**/build.txt', 'dist/temp'])
    .pipe(clean())
})

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
gulp.task('scss:build', function () {
  gulp.src(['src/scss/**/*.scss', '!src/scss/lib/**/*.scss'])
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/css'))
})
gulp.task('babel:build', function () {
  return gulp.src(['src/babel/**/*.js'])
    .pipe(babel())
    .pipe(uglifyJs())
    .pipe(gulp.dest('dist/js'))
})
gulp.task('img:build', function () {
  return gulp.src(['src/images/**/*'])
    .pipe(gulp.dest('dist/images'))
})
gulp.task('jslib:build', function () {
  return gulp.src(['src/js/lib/**/*'])
    .pipe(gulp.dest('dist/js/lib'))
})
gulp.task('rev', function () {
  return gulp.src(['dist/**/*.js', 'dist/**/*.css', '!dist/js/lib/**/*'])
    .pipe(rev())
    .pipe(gulp.dest('dist/temp/'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('dist/temp/'))
})
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

gulp.task('buildProd', sequence('clean:dist', ['img:build', 'html:build', 'scss:build', 'babel:build', 'jslib:build'], 'rev', 'revReplace', 'clean:afterbuild'))
