/*
 * @Author: don
 * @Date: 2020-12-22 10:26:09
 * @LastEditors: don
 * @LastEditTime: 2020-12-22 17:24:20
 * @Description:
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { router } = app;
  router.prefix(`/api/v1/admin`); // 添加公共前缀
  require('./routers/home')(app);
  require('./routers/product')(app);
};
