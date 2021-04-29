/*
 * @Author: don
 * @Date: 2021-03-18 10:40:59
 * @LastEditors: don
 * @LastEditTime: 2021-03-30 15:50:33
 * @Description: 主要配置文件
 */
const head = require('./config/head')
const plugins = require('./config/plugins')
const themeConfig = require('./config/themeConfig')

module.exports = {
  title: '知识记录',
  description: '整理知识体系',
  author:'don',
  base: '/', // 根路径
  cache: false, // 是否开启缓存
  port: '80', // 端口
  // permalink: "/:year/:month/:day/:slug", // 永久链接
  lastUpdated: true, // 最后更新时间
  displayAllHeaders: true, // 默认值：false
  // selectText: '选择语言',
  // editLinkText: '编辑此页',
  lastUpdated: '上次更新',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head,
  plugins,
  themeConfig
}



