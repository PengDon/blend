/**
 * 读取.md文件，动态修改[YAML](https://yaml.org/)
 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');  // https://github.com/jonschlinkert/gray-matter
const jsonToYaml = require('json2yaml'); // https://www.npmjs.com/package/json2yaml
const logger = require('./log4js')
const {getPermalink,formatTime} = require('./comm')
const str = fs.readFileSync(path.join(__dirname,'./test.md'), 'utf8');
const fileMatterObj = matter(str)
let matterData = fileMatterObj.data;
// logger.info(matterData)

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
// logger.info(matterData)

const newData = jsonToYaml.stringify(matterData).replace(/\n\s{2}/g,"\n").replace(/"/g,"")  + '---\r\n' + fileMatterObj.content;
fs.writeFileSync(path.join(__dirname,'./test.md'), newData); 









