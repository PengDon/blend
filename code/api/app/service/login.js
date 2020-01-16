const Service = require("egg").Service;

class LoginService extends Service {
   async login(params){
      let res = await this.app.mysql.get("users",{
          name:params.name,
          password:params.password
      })
      return res;
   }

   async loginOut(){

   }
}

module.exports = LoginService;