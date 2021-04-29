/*
 * @Author: don
 * @Date: 2021-04-09 18:12:40
 * @LastEditors: don
 * @LastEditTime: 2021-04-13 15:27:17
 * @Description: 生成导航栏
 */
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter') // https://github.com/jonschlinkert/gray-matter
const logger = require('./log4js')

// 获取FrontMatter
const getFrontMatter = (pathUrl) => {
  const str = fs.readFileSync(path.join(__dirname, pathUrl), 'utf8')
  const fileMatterObj = matter(str)
  const matterData = fileMatterObj.data
  return matterData
}

// 获取导航
const getNav = (url,arr = []) => {
  const files = fs.readdirSync(path.join(__dirname, url))
  files.map((v) => {
    if (v !== '.vuepress') {
      let obj = {}
      if (v !== 'README.md') {
        obj['text'] = v.substr(3)
        obj['link'] = getFrontMatter(url + '/' + v + '/' + 'README.md').permalink
        arr.push(obj)
      }else{
        obj['text'] = '首页'
        obj['link'] = getFrontMatter(url + '/' + v).permalink
        arr.unshift(obj)
      }
    }
  })
  return arr
}

const nav = getNav('../blog')
// logger.info(nav)
fs.writeFileSync(path.join(__dirname,'./nav.json'), JSON.stringify(nav)); 