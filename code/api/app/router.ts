/*
 * @Author: don
 * @Date: 2020-12-22 10:26:09
 * @LastEditors: don
 * @LastEditTime: 2020-12-28 13:50:57
 * @Description:
 */
import { Application } from 'egg';
// import { constantRoutes } from "./constant-routes";

export default (app: Application) => {
  app.router.prefix('/api/v1/admin'); // 添加公共前缀
  require('./routers/home')(app);
  require('./routers/product')(app);
  require('./routers/project')(app);
  require('./routers/user')(app);
  require('./routers/task')(app);
  // console.log(constantRoutes);
};