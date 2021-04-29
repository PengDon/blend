/*
 * @Author: don
 * @Date: 2021-03-29 10:00:06
 * @LastEditors: don
 * @LastEditTime: 2021-04-29 15:31:14
 * @Description:
 */
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter') // https://github.com/jonschlinkert/gray-matter
const logger = require('./log4js')
let rootPath = path.join(__dirname, '../blog')

const { setMatter } = require('./setFrontMatter')

// 获取FrontMatter
const getFrontMatter = (pathUrl) => {
  const str = fs.readFileSync(path.join(__dirname, pathUrl), 'utf8')
  const fileMatterObj = matter(str)
  const matterData = fileMatterObj.data
  return matterData
}

/**
 * 获取目录列表
 * @param {string} filePath
 * @returns
 */
const getDirs = (filePath) => {
  return fs.readdirSync(filePath)
}

/**
 * 获取名称
 * @param {string} str
 */
const getName = (str) => {
  return str.split('.')[1]
}

// 获取一级目录映射关系
// function getOneLevel(){
//   let arr = []
//   // 获取导航
//   const getNav = (url) => {
//     const files = fs.readdirSync(path.join(__dirname, url))
//     files.map((v) => {
//       if (v !== '.vuepress') {
//         // console.log(v)
//         let obj = {}
//         let stat = fs.statSync(path.join(__dirname, url + '/' + v))
//         // 目录
//         if (stat.isDirectory()) {
//           // getNav(url + '/' + v)
//           obj['text'] = getName(v)
//           obj['link'] = getFrontMatter(
//             url + '/' + v + '/' + 'README.md'
//           ).permalink
//           arr.push(obj)
//         }
//         // 文件
//         if (stat.isFile()) {
//           if (v === 'README.md') {
//             obj['text'] = '首页'
//             obj['link'] = getFrontMatter(url + '/' + v).permalink
//             arr.unshift(obj)
//           } else {
//             obj['text'] = getName(v)
//             obj['link'] = getFrontMatter(url + '/' + v).permalink
//             arr.push(obj)
//           }
//         }
//       }
//     })
//   }
//   getNav('../blog')
//   logger.info(arr)
//   return arr;
// }

// 遍历指定目录下的所有.md文件
function getAllMd() {
  let arr = []
  function getMdList(filePath) {
    let files = fs.readdirSync(path.join(__dirname, filePath))
    // console.log(files)
    files.map((v) => {
      if (v != '.vuepress') {
        // console.log(v)
        let file = path.join(__dirname, filePath, v)
        let stat = fs.statSync(file)
        // 如果是文件类型，则存入数组
        if (stat.isFile()) {
          setMatter(file)
          arr.push(file)
        } else {
          // 如果是目录，则继续遍历
          getMdList(`${filePath}/${v}`)
        }
      }
    })
  }
  getMdList('../blog')
  // logger.info(arr)
  return arr
}

getAllMd()