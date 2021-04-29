/*
 * @Author: don
 * @Date: 2021-04-09 14:40:20
 * @LastEditors: don
 * @LastEditTime: 2021-04-09 17:39:22
 * @Description: 工具类
 */

// 获取永久链接
exports.getPermalink = () => {
  const id = () =>
    (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  return `/pages/${id()}${id()}${id()}${id()}`
}

// 格式化时间
exports.formatTime = (date) => {
  return `${date.getFullYear()}-${zero(date.getMonth() + 1)}-${zero(
    date.getDate()
  )} ${zero(date.getHours())}:${zero(date.getMinutes())}:${zero(
    date.getSeconds()
  )}`
}

// 小于10补0
function zero(d) {
  return d.toString().padStart(2, '0')
}
