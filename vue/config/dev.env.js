'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  EVN_CONFIG:'"dev"',
  NODE_ENV: '"development"',
  API_ROOT:'"http://localhost:4040/moban/api/"'
})
