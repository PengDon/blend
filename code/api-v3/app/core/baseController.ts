/*
 * @Author: don
 * @Date: 2020-12-22 10:40:36
 * @LastEditors: don
 * @LastEditTime: 2020-12-25 11:36:54
 * @Description:
 */
import { Controller, Context } from 'egg';

export default class BaseController extends Controller {
  private serviceName: string;
  constructor(serviceName: string, app: Context) {
    super(app);
    this.serviceName = serviceName;
  }
  /**
   * 列表
   * get
   */
  public async index() {
    const { ctx } = this;
    const result = await ctx.service[this.serviceName].list({});
    ctx.body = result;
  }
  /**
   * 单个
   * /:id
   */
  public async show() {
    const { ctx } = this;
    const result = await ctx.service[this.serviceName].one(ctx.params.id);
    ctx.body = {
      code: 8200,
      msg: '获取单条记录',
      data: result
    };
  }
  /**
   * 新增
   * post
   */
  public async create() {
    const { ctx } = this;
    const result = await ctx.service[this.serviceName].save(ctx.request.body);
    ctx.body = {
      code: '1',
      msg: '新增成功',
      data: result
    };
  }
  /**
   * 修改
   * put
   */
  public async update() {
    const { ctx } = this;
    const result = await ctx.service[this.serviceName].update(ctx.params.id, ctx.request.body);
    ctx.body = {
      code: '1',
      msg: '修改成功',
      data: result
    };
  }
  /**
   * 删除
   * /:id
   */
  public async destroy() {
    const { ctx } = this;
    const result = await ctx.service[this.serviceName].deleteOne(ctx.params.id);
    ctx.body = {
      code: '1',
      msg: '删除成功',
      data: result
    };
  }

  
}

