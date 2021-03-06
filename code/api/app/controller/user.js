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
    let res = await ctx.service.user.login(ctx.request.body.payload);
    ctx.body = res;
  }

  async setUserStatus(){
    const {ctx} = this;
    let userId='';
    if(ctx.request.body){
      userId=ctx.request.body.userId;
    }
    let bool = await ctx.service.user.resetUserStatus(userId);
    ctx.body = bool;
  }

  async addUser(){
    const {ctx} = this;
    console.log('===========请求参数=============',ctx.request.body);
    let res = await ctx.service.user.addUser(ctx.request.body);
    ctx.body = res;  
  }

  async delUser(){
    const {ctx} = this;
    console.log('===========请求参数=============',ctx.params);
    let res = await ctx.service.user.delUser(ctx.params.userId);
    ctx.body = res;
  }

  async loginByGithub(){
    const {ctx} = this;
    let res = await ctx.service.user.loginByGithub();
    ctx.body = res;
  } 

  async logout(){
    const {ctx} = this;
    let res = await ctx.service.user.logout();
    ctx.body = res;
  }
}

module.exports = UserController;