/*
 * @Author: don
 * @Date: 2021-02-07 11:11:55
 * @LastEditors: don
 * @LastEditTime: 2021-02-07 11:12:12
 * @Description: 404统一处理中间件，[参考](https://eggjs.org/zh-cn/core/error-handling.html)
 */
module.exports = () => {
    return async function notFoundHandler(ctx, next) {
      await next();
      // console.log('---------------------')
      // console.log(ctx)
      // console.log('---------------------')
      if (ctx.status === 404 && !ctx.body) {
        if (ctx.acceptJSON) {
          ctx.body = { error: 'Not Found' };
        } else {
          ctx.body = '<h1>Page Not Found</h1>';
        }
      }
    };
  };