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
      if (ctx.status === 404 && !ctx.body) {
        if (ctx.acceptJSON) {
          ctx.body = { error: 'Not Found' };
        } else {
          ctx.body = '<h1>Page Not Found</h1>';
        }
      }
    };
  };