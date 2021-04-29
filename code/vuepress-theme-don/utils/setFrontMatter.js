/*
 * @Author: don
 * @Date: 2021-04-09 17:38:46
 * @LastEditors: don
 * @LastEditTime: 2021-04-29 15:36:01
 * @Description:
 * frontMatter:https://vuepress.vuejs.org/zh/guide/frontmatter.html#%E5%85%B6%E4%BB%96%E6%A0%BC%E5%BC%8F%E7%9A%84-front-matter
 */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter') // https://github.com/jonschlinkert/gray-matter
const jsonToYaml = require('json2yaml') // https://www.npmjs.com/package/json2yaml
const logger = require('./log4js')
const { getPermalink, formatTime } = require('./comm')

exports.setMatter = (filePath) => {
  const sourceFile = fs.readFileSync(filePath, 'utf-8')
  const matterObj = matter(sourceFile)
  let matterData = matterObj.data
  // 改变前
  console.log(matterData)
  let time = formatTime(new Date())
  // 创建时间
  if(!matterData['createTime']){
    matterData['createTime'] = time
  }else{
    matterData['createTime'] = formatTime(new Date(matterData['createTime']))
  }
  // 更新时间
  if(!matterData['updateTime']){
    matterData['updateTime'] = time
  }else {
    matterData['updateTime'] = formatTime(new Date(time))
  }
  // 永久链接
  if(!matterData['permalink']){
    matterData['permalink'] = getPermalink()
  }
  // 改变后
  console.log(matterData)
  const newData = jsonToYaml.stringify(matterData).replace(/\n\s{2}/g,"\n").replace(/"/g,"")  + '---\r\n' + matterObj.content;
  fs.writeFileSync(filePath, newData);
}

// setMatter('d:\\SelfCode\\eslit-rules\\vuepress-theme-don\\blog\\README.md')




