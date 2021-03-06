"use strict";
const Service = require("egg").Service;
const utils = require("../extend/tool");
class UserService extends Service {
  // 查询用户列表
  async queryUserList() {
    if(!this._isLogin()){
      return  { success: false, msg: "还没登陆", data:null};
    }

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
    console.log('-----get params-----',param)
    return this.ctx.model.User.find(param)
      .then(res => {
        console.log('------res--------',res);
        if (res[0].name === param.name && res[0].password === param.password) {
          return this._updataUserStatus(res[0].userId,true).then(data=>{
                   console.log("_updataUserStatus-----------:",data);
                   if(data.nModified || data.ok==1){
                     return { success: true, msg:"登录成功", data: res[0]};
                   }
                 },data=>{
                   console.log(data);
                   return { success: false, msg:"", err: data };
                 })
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
    let userId = utils.UUId(),
        _this = this,
        obj = {
      userId:userId,
      status:false,
      createTime:utils.FormatDate("YYYY-MM-DD HH:mm"),
      loginTime:''
    }
    user = Object.assign({},obj,user);
    console.log('----默认对象-----',user);
    
    return this.ctx.model.User.create(user)
    .then(res=>{
      console.log('------res--------',res);
      if(res){
        return { success: true, msg: "用户添加成功", code: 0, data:user};
      }else{
        return { success: true, msg: "用户添加失败", code: 0};
      }
    })
    .catch(err=>{
      return { success: false, err: err };
    });
  }

  // 删除用户根据userId
  async delUser(id){
    return this.ctx.model.User.remove({userId:id})
    .then(res=>{
      console.log('------res--------',res);
      if(res.ok){
        return { success: true, msg: "删除用户成功", code: 0};
      }else{
        return { success: true, msg: "删除用户失败", code: 0};
      }
    })
    .catch(err=>{
      return { success: false, err: err };
    });
  }

  async loginByGithub(){
    const ctx = this.ctx;
    if (ctx.isAuthenticated()) {
      console.log("github授权成功")
      const loginRes = await this.queryUserByName({
        name: ctx.user.name
      });
      console.log("github授权回调数据:\n",ctx.user);
      //数据库里有值直接返回
      if(loginRes.success && loginRes.data.length>0){
        return { success: true, msg:"github授权登录成功", data: loginRes.data[0]};
      }else{ // 先注册（添加数据到数据库在返回值）
        let passportObj = ctx.user,
            pars ={
              name:passportObj.name,
              passportObj:JSON.stringify(passportObj),
              passportType:"github"
            }; 
        const addUserRes = await this.addUser(pars);
        console.log("addUser-------res:\n",addUserRes);
        return { success: true, msg:"github授权登录成功", data: addUserRes.data};
      }

    }else{
      return '<a href="/passport/github">Github</a>';
      // return { success: false, msg:"github授权登录失败", data: null};
    }
  }

  async logout(){
    const ctx = this.ctx;
    ctx.logout();
    return { success: true, msg:"退出登录成功", data: 1};
  }

  _isLogin(){
    const ctx = this.ctx;
    return ctx.isAuthenticated();
  }
}

module.exports = UserService;
