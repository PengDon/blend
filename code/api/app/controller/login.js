const Controller = require("egg").Controller;

class LoginController extends Controller {
  // 登录
  async signIn() {
    let code = 1;
    const { ctx, service, app } = this;
    // 获取用户传递的参数
    const params = ctx.request.body;
    // 调用service方法
    const res = await service.login.signIn(params);
    // 进行data数据验证，判断登录是否成功
    let msg = "登录成功!";
    let data = null;
    if (res) {
      if (res.password === params.password) {
        // 登录成功后，生成token
        const token = app.jwt.sign(
          {
            username: res.username // 需要存储的 token 数据
          },
          app.config.jwt.secret
        );
        code = 0;
        // 返回 token 到前端
        data = token;
      } else {
        msg = "密码错误！";
      }
    } else {
      msg = "用户不存在!";
    }
    ctx.helper.success(ctx, code, data, msg);
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
