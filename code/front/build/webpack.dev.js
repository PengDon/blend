/*
 * @Author: don
 * @Date: 2021-02-05 16:32:10
 * @LastEditors: don
 * @LastEditTime: 2021-02-05 17:23:51
 * @Description: 开发环境配置
 */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/app.ts'),
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
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
        inject: 'body', // 指定插入的<script>标签在body底部
        hash: true
      }
    ),
    new VueLoaderPlugin()
  ],
  devServer: {
    disableHostCheck: true
  }
}