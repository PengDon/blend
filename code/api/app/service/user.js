'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  // 查询用户列表
  async queryUserList() {
    return this.ctx.model.User.find();
  }
  // 根据name查询用户
  async queryUserByName(param) {
    return this.ctx.model.User.find(param);
  }
}

module.exports = HomeService;