/*
 * @Author: don
 * @Date: 2020-01-16 11:30:55
 * @LastEditTime: 2020-03-05 14:19:39
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
 * @description: 处理成功场景
 * @param {Object} ctx 上下文
 * @param {any} data 接口返回的结果
 * @param {string} msg 消息内容
 * @return: 
 * @example: ctx.helper.success(ctx, data, '请求成功');) => {"code": 200,"data": data,"msg":"请求成功"}
 */
exports.success = (ctx, data, msg) => {
  ctx.body = {
    code: 200,
    data,
    msg
  }
}
/**
 * @description: 处理错误场景
 * @param {Object} ctx 上下文
 * @param {any} data 接口返回结果 
 * @param {string} msg 消息内容
 * @return: 
 * @example: ctx.helper.success(ctx, data, '请求失败');) => {"code": 500,"data": data,"msg":"请求失败"}
 */
exports.error = (ctx, data, msg) => {
  ctx.body = {
    code: 500,
    data,
    msg
  }
}