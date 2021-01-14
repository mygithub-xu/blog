'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  // 测试环境
  EVN_CONFIG:'"test"',
  API_ROOT:'"https://www.whfch.icu:4040/moban/api/"',
})
