/*
 * @Author: don
 * @Date: 2020-08-17 11:22:51
 * @LastEditors: don
 * @LastEditTime: 2020-09-30 16:17:58
 * @Description: 
 */
/** 
 * @Author: don  
 * @Date: 2020-01-15 22:26:43  
 * @Last Modified by: don
 * @Last Modified time: 2020-01-15 22:28:41
 * @Describe: 404统一处理中间件，[参考](https://eggjs.org/zh-cn/core/error-handling.html)
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