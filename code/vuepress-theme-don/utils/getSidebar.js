/*
 * @Author: don
 * @Date: 2021-04-09 18:12:40
 * @LastEditors: don
 * @LastEditTime: 2021-04-13 15:33:14
 * @Description: 生成侧边栏
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

// 3
const getTwo = (pre, cur, arr = []) => {
  const files = fs.readdirSync(
    path.join(__dirname, '../blog/' + pre + '/' + cur)
  )
  files.map((v) => {
    arr.push(`${cur}/${v}`)
  })
  return arr
}

// 2
const getOne = (url, arr = []) => {
  const files = fs.readdirSync(path.join(__dirname, '../blog/' + url))
  files.map((v) => {
    if (v !== 'README.md') {
      console.log(getTwo(url, v))
      arr.push({
        title: v.substr(3),
        children: getTwo(url, v),
      })
    } else {
      arr.unshift('')
    }
  })
  return arr
}

// 1
const getRoot = (url, obj = {}) => {
  const files = fs.readdirSync(path.join(__dirname, url))
  files.map((v) => {
    if (v !== '.vuepress' && v !== 'README.md') {
      obj[`/${v}/`] = []
      const stat = fs.statSync(path.join(__dirname, url + '/' + v))
      if (stat.isDirectory()) {
        obj[`/${v}/`] = getOne(v)
        logger.info(getOne(v))
      }
    }
  })
  return obj
}

// logger.info(getRoot('../blog'))
const sidebar = getRoot('../blog')
fs.writeFileSync(path.join(__dirname,'./sidebar.json'), JSON.stringify(sidebar)); 