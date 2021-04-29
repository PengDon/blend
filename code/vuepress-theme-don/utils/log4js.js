/*
 * @Author: don
 * @Date: 2021-03-18 14:43:54
 * @LastEditors: don
 * @LastEditTime: 2021-03-18 14:55:28
 * @Description: [log4js](https://www.npmjs.com/package/log4js)
 */
const {configure,getLogger} = require('log4js')
// 配置
configure({
  replaceConsole: true,
    appenders: {
      stdout: {
        // 控制台输出
        type: 'stdout',
      },
      req: {
        // 请求日志
        type: 'dateFile',
        filename: 'logs/reqlog/',
        pattern: 'req-yyyy-MM-dd.log',
        alwaysIncludePattern: true,
        maxLogSize: 10485760, // 10mb,日志文件大小,超过该size则自动创建新的日志文件
        backups: 20, // 仅保留最新的20个日志文件
        compress: true //  超过maxLogSize,压缩代码
      },
      err: {
        // 错误日志
        type: 'dateFile',
        filename: 'logs/errlog/',
        pattern: 'err-yyyy-MM-dd.log',
        alwaysIncludePattern: true,
        maxLogSize: 10485760, // 10mb,日志文件大小,超过该size则自动创建新的日志文件
        backups: 20, // 仅保留最新的20个日志文件
        compress: true //  超过maxLogSize,压缩代码
      },
    },
    categories: {
      default: { appenders: ['stdout', 'req'], level: 'info' },
      err: { appenders: ['stdout', 'err'], level: 'error' },
    },
})

const logger = getLogger('blog') // get the logger instance

module.exports = logger

