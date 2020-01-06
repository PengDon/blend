const Controller = require("egg").Controller;

class LoginController extends Controller {

  async login() {
    const { ctx } = this;
    const params = ctx.request.body;
    const user = await ctx.service.login.login(params);
    ctx.body = user;
  }

}

module.exports = LoginController;
