const Controller = require("egg").Controller;

class LoginController extends Controller {
  // 登录
  async signIn() {
    const { ctx, service } = this;
    const params = ctx.request.body;
    const res = await service.login.signIn(params);
    ctx.helper.success({ ctx, res });
  }
  // // 登出
  // async signOut(){
  // }
}

module.exports = LoginController;
