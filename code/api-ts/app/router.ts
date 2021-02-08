/*
 * @Author: don
 * @Date: 2020-12-22 10:26:09
 * @LastEditors: don
 * @LastEditTime: 2021-02-07 10:21:52
 * @Description:
 */
import { Application } from 'egg';

export default (app: Application) => {
  // 后台管理接口
  require('./routers/admin')(app);
  // pc端前端接口
  require('./routers/pc')(app);
  // 移动端前端接口
  require('./routers/mobile')(app);
};
