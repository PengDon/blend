import { Controller } from 'egg';

export default class UserController extends Controller {
  /**
   * 用户列表
   */
  public async userList() {
    const { ctx } = this;
    ctx.body = await ctx.service.users.getUserList();
  }
}
