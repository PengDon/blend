/*
 * @Author: don
 * @Date: 2021-02-05 16:32:10
 * @LastEditors: don
 * @LastEditTime: 2021-02-05 16:55:05
 * @Description: 
 */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/app.js'),
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: 'index.html', // 模版路径
        filename: 'index.html', // 生成的文件名称
        inject: 'body' // 指定插入的<script>标签在body底部
      }
    ),
    new VueLoaderPlugin()
  ],
  devServer: {
    disableHostCheck: true
  }
}