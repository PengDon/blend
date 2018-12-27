"use strict";

const Service = require("egg").Service;

class UserService extends Service {
  // 查询用户列表
  async queryUserList() {
    return this.ctx.model.User.find({}, { password: 0 })
      .then(res => {
        return { success: true, msg: "", code: 0, data: res };
      })
      .catch(err => {
        return { success: false, err: err };
      });
  }
  // 根据name查询用户
  async queryUserByName(param) {
    return this.ctx.model.User.find(param, { password: 0 })
      .then(res => {
        return { success: true, msg: "", code: 0, data:res };
      })
      .catch(err => {
        return { success: false, err: err };
      });
  }
  // 用户登录
  async login(param) {
    return this.ctx.model.User.find(param)
      .then(res => {
        console.log('------res--------',res);
        console.log('------param--------',param);
        if (res[0].name === param.name && res[0].password === param.password) {
          return { success: true, msg: "登录成功", code: 0};
        }
        return { success: false, msg:"用户名或密码错误", err: err };
      })
      .catch(err => {
        return { success: false, msg:"", err: err };
      });
  }

  // 更新用户登录状态
  async resetUserStatus(id) {
    console.log("------接收到参数----userid--", id);
    return this.ctx.model.User.update(
        { userId: id },
        { $set: { status: true } }
      )
      .then(res => {
        console.log('------res--------',res);
        if(res.nModified){
          return { success: true, msg: "数据更新成功", code: 0};
        }else{
          return { success: true, msg: "数据更新失败", code: 0};
        }
      })
      .catch(err => {
        return { success: false, err: err };
      });
  }
}

module.exports = UserService;
