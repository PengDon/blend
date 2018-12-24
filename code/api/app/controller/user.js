'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async list() {
    const { ctx } = this;
    // ctx.service.[service目录下要调用的文件名称]
    let userList = await ctx.service.user.queryUserList();
    console.log('============查询用户列表============', userList);
    ctx.body = userList;
  }
}

module.exports = UserController;