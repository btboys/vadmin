/**
 * <p>****************************************************************************</p>
 * <p><b>Copyright © 2010-2019 soho team All Rights Reserved<b></p>
 * <ul style="margin:15px;">
 * <li>Description : </li>
 * <li>Version     : 1.0</li>
 * <li>Creation    : 2019年11月19日</li>
 * <li>@author     : ____′↘夏悸</li>
 * </ul>
 * <p>****************************************************************************</p>
 */
const webpack = require('webpack');
const path = require('path');
const globalVars = require('./src/style/var.js');

module.exports = {
  publicPath:'',
  outputDir:'docs',
  devServer: {
    port: 8866,
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8877',
        pathRewrite: {'^/api': ''}
      },
      '^/files': {
        target: 'http://127.0.0.1:8877'
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        'HeyUI': 'heyui-gson'
      })
    ]
  },
  css: {
    loaderOptions: {
      less: {
        globalVars
      }
    }
  }
};
