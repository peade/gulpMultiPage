const fs = require('fs')
const path = require('path')

const minimist = require('minimist')
const glob = require('glob')
const through = require('through2')

/* 文件路径 */
let _path = exports.path = {
  app: './',
  dist: './dist/',
  cwd: path.resolve('./'),
  base: path.resolve('./'),
  requireConfig: 'static/js/require.config.js'
}
/*  获取命令行参数 */
let options = exports.options = getArgv()

function getArgv () {
  let options = minimist(process.argv.slice(2), {
    string: ['env', 'mod'],
    boolean: ['hash'],
    default: {
      env: process.env.ENV || 'development',
      mod: null,
      hash: true
    }
  })
  options.isDevelopment = (options.env === 'development')
  options.isProduction = (options.env === 'production')
  if (!options.mod) {
    throw('请输入模块名，例如gulp build --mod=bi...')
  }
  return options
}

/* 获取基本路径 */
let appPath = exports.appPath = _path.app + options.mod + '/'
let distPath = exports.distPath = _path.dist + options.mod + '/'

/* 获取对应模块下的配置 */
let modOption = exports.modOption = getModoption()
/* 浏览器兼容配置 */
