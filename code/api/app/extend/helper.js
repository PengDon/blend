/*
 * @Author: don
 * @Date: 2020-01-16 11:30:55
 * @LastEditTime : 2020-01-16 15:41:39
 * @Description: 框架拓展 - 辅助类
 */


const moment = require('moment')

/**
 * @description: 格式化时间
 * @param {time} time 时间戳
 * @return: 
 * @example: ctx.helper.formatTime(new Date().getTime()) => 2020-01-16 12:48:43
 */
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss')

/**
 * @description: 处理成功响应
 * @param {Object} ctx 上下文
 * @param {any} res 接口返回的结果对象
 * @param {string} msg 消息内容
 * @return: 
 * @example: ctx.helper.success(ctx,res,'描述') => {"code": 200,"data": res,"msg":"描述"}
 */
exports.success = (ctx, data = null, msg = '请求成功')=> {
  ctx.body = {
    code: 1,
    data,
    msg 
  }
  ctx.status = 200
}
