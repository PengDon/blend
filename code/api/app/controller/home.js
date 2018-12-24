'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // console.log('=====================',ctx.service)
    ctx.body = 'hi, egg react';
    // ctx.service.[service目录下要调用的文件名称]
    let userList = await ctx.service.user.queryUserList();
    console.log('============查询用户列表============', userList);
  }
}

module.exports = HomeController;