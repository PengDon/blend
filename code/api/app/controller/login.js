const Controller = require("egg").Controller;

class LoginController extends Controller {
   // 登录
   async signIn() {
    let code = 1;
    const { ctx, service } = this;
    const params = ctx.request.body;
    const res = await service.login.signIn(params);
    let msg = '登录成功!';
    let data = null;
    if(res){
      if(res.password === params.password){
        code = 0;
        data = res;
      }else{
        msg = '密码错误！';
      }
    }else{
      msg = '用户不存在!';
    }
    ctx.helper.success(ctx,code, data,msg);
  }
  // // 登录
  // async signIn() {
  //   const { ctx, service } = this;
  //   const params = ctx.request.body;
  //   const res = await service.login.signIn(params);
  //   ctx.helper.success(ctx, res);
  // }
  // // 登出
  // async signOut(){
  // }
}

module.exports = LoginController;
