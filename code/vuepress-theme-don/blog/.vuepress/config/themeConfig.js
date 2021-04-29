/*
 * @Author: don
 * @Date: 2021-03-18 13:53:01
 * @LastEditors: don
 * @LastEditTime: 2021-03-30 15:31:29
 * @Description: 主题配置
 */
const nav = require('./themeConfig/nav') 
const sidebar = require('./themeConfig/sidebar') 
const footer = require('./themeConfig/footer') 

module.exports = {
  sidebarDepth: 3, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  nav, // 导航栏
  sidebar, // 侧边栏
  footer
}