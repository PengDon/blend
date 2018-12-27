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
    console.log('===========请求参数=============',ctx.request.body);
    let bool = await ctx.service.user.login(ctx.request.body);
    ctx.body = bool;
  }

  async setUserStatus(){
    const {ctx} = this;
    console.log('===========请求参数=============',ctx.params);
    console.log('===========请求参数=============',parseInt(ctx.params.userId));
    let bool = await ctx.service.user.resetUserStatus(parseInt(ctx.params.userId));
    ctx.body = bool;
  }
}

module.exports = UserController;