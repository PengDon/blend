'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async list() {
    const { ctx } = this;
    // ctx.service.[service目录下要调用的文件名称]
    let userList = await ctx.service.user.queryUserList();
    ctx.body = userList;
  }

  async getUserByName(){
    const {ctx} = this;
    let user = await ctx.service.user.queryUserByName(ctx.params);
    ctx.body = user;
  }

  async login(){
    const {ctx} = this;
    // console.log(ctx.params);
    let bool = await ctx.service.user.login(ctx.params);
    ctx.body = bool;
  }
}

module.exports = UserController;