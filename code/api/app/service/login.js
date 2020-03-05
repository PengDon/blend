const Service = require("egg").Service;

class LoginService extends Service {
  // 登录
  async signIn (params) {
    const res = await this.app.mysql.get("users", { name: params.name });
    return res;
  }
}

module.exports = LoginService;