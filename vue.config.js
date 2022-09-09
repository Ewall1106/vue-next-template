'use strict'

const path = require('path')
const config = require('./config')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const { mockURL } = config[process.env.NODE_ENV]

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  devServer: {
    proxy: {
      '/dev-api': {
        target: mockURL,
        pathRewrite: {
          '^/dev-api': '/'
        },
        secure: false,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map',
    name: 'vue-h5-template',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
