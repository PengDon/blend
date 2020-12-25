/*
 * @Author: don
 * @Date: 2020-12-22 10:26:09
 * @LastEditors: don
 * @LastEditTime: 2020-12-25 14:12:48
 * @Description:
 */
import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
    // 渲染到指定视图，ctx.render('视图名称','视图要显示的数据源')
    // await ctx.render('home.njk',{name:'nunjucks view test'})
    // await ctx.render('home.njk', { items: [ 1, 2, 3, 4, 5, 6 ] });
  }0;

  public async demo() {
    const { ctx } = this;
    ctx.body = await ctx.service.product.list({}); // 查询数据库的数据进行展示
  }

}
