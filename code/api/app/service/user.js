'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 查询用户列表
  async queryUserList() {
    return this.ctx.model.User.find({},{'password':0});
  }
  // 根据name查询用户
  async queryUserByName(param) {
    return this.ctx.model.User.find(param,{'password':0});
  }
  // 
  async login(param){
    let bool = false;
    let res = await this.ctx.model.User.find(param);
    console.log('=======login======',res);
    console.log('=======param======',param);
    if(res[0].name === param.name && res[0].password === param.password){
      bool = true;
    }
    return bool;
  }
}

module.exports = UserService;