'use strict';

const Service = require('egg').Service;

class HomeService extends Service {
  // 查询用户列表
  async queryUserList() {
    return this.ctx.model.User.find({},{'password':0});
  }
  // 根据name查询用户
  async queryUserByName(param) {
    return this.ctx.model.User.find(param,{'password':0});
  }
}

module.exports = HomeService;