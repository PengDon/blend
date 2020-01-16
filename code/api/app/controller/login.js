const Controller = require("egg").Controller;

class LoginController extends Controller {

  async login() {
    const { ctx ,service} = this;
    const params = ctx.request.body;
    const res = await service.login.login(params);
    ctx.helper.success({ ctx, res });
  }

}

module.exports = LoginController;
