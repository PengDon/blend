'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  // 查询用户列表
  async queryUserList(){
    return this.ctx.model.User.find();
  }

  // // 查询用户列表
  // async queryUserList(){
  //   let res = await this.app.mongo.find('p_user');
  //   console.log('----------查询用户列表------------', res);
  //   return res;
  // }
}

module.exports = HomeService;