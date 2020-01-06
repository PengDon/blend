const Service = require("egg").Service;

class LoginService extends Service {
   async login(params){
      let bool = await this.app.mysql.get("users",{
          name:params.name,
          password:params.password
      })
      return { bool };
   }

   async loginOut(){

   }
}

module.exports = LoginService;