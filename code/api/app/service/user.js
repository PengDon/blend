"use strict";
const Service = require("egg").Service;
const utils = require("../extend/tool");
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
        if (res[0].name === param.name && res[0].password === param.password) {
          return { success: true, msg:"登录成功", data: res[0]};
        }

        return { success: false, msg:"用户名或密码错误", err: err };
      })
      .catch(err => {
        return { success: false, msg:"", err: err };
      });
  }

  //更新用户登录状态
  async _updataUserStatus(id,isLogin){
      return this.ctx.model.User.update({ userId: id }, { $set: { status: isLogin } } );
  }

  // 更新用户登录状态
  async resetUserStatus(id) {
    console.log("resetUserStatus------接收到参数---id:", id);
    return this.ctx.model.User.update(
        { userId: id },
        { $set: { status: true } }
      )
      .then(res => {
        console.log('------res--------',res);
        if(res.nModified || res.ok==res.n){
          return { success: true, msg: "数据更新成功", code: 0};
        }else{
          return { success: true, msg: "数据更新失败", code: 0};
        }
      })
      .catch(err => {
        return { success: false, err: err };
      });
  }
  
  // 添加用户信息
  async addUser(user){
    let obj = {
      userId:utils.UUId(),
      status:false,
      createTime:utils.FormatDate("YYYY-MM-DD HH:mm"),
      loginTime:''
    }
    user = Object.assign({},obj,user);
    console.log('----默认对象-----',user);
    
    return this.ctx.model.User.create(user)
    .then(res=>{
      console.log('------res--------',res);
      if(res.success){
        return { success: true, msg: "用户添加成功", code: 0};
      }else{
        return { success: true, msg: "用户添加失败", code: 0};
      }
    })
    .catch(err=>{
      return { success: false, err: err };
    });
  }
}

module.exports = UserService;
