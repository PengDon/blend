/*
 * @Author: don
 * @Date: 2021-04-29 15:36:11
 * @LastEditors: don
 * @LastEditTime: 2021-04-29 15:37:59
 * @Description: 
 */
const fs = require('fs')
const path = require('path')
const logger = require('./log4js')

// 遍历指定目录下的所有.md文件
exports.getAllMd = () => {
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

// getAllMd()