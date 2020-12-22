/*
 * @Author: don
 * @Date: 2020-12-22 10:26:09
 * @LastEditors: don
 * @LastEditTime: 2020-12-22 14:18:21
 * @Description:
 */
import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async demo() {
    const { ctx } = this;
    ctx.body = await ctx.service.product.list({}); // 查询数据库的数据进行展示
  }

}
