/*
 * @Author: don
 * @Date: 2020-08-17 11:22:51
 * @LastEditors: don
 * @LastEditTime: 2020-09-30 17:23:53
 * @Description:
 */
module.exports = (options) => {
  return async function auth(ctx, next) {
    // 如果有用户信息，则进入后台管理页面，否则进入登录页
    console.log('|||||||||||||||||||||||||||||||||')
    console.log(ctx.cookies.get('userInfo'))
    console.log('|||||||||||||||||||||||||||||||||')
    if (ctx.cookies.get('userInfo')) {
      await next()
    } else {
      // 排除登录页，避免死循环
      if (ctx.request.url === '/login') {
        await next()
      } else {
        ctx.redirect('/login')
      }
    }
  }
}
