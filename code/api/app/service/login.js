const Service = require("egg").Service;

class LoginService extends Service {
   async signIn(params){
      let res = await this.app.mysql.get("users",{
          name:params.name,
          password:params.password
      })
      return res;
   }

  // // 登出
  // async signOut(){
  // }
}

module.exports = LoginService;