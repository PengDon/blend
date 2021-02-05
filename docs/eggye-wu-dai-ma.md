* 在app根目录新建service文件夹

    cd app
    mkdir service
    cd service
    touch users.js

    # app/service/users.js
    const Service = require("egg").Service;

    class UserService extends Service {
      async findAll() {
        const user = await this.app.mysql.select("users");
        return { user };
      }

      async findOne(id) {
        const user = await this.app.mysql.get("users", { id: id });
        return { user };
      }

      async add(params) {
        const date = new Date();
        const result = await this.app.mysql.insert("users", {
          name: params.name,
          password: params.pwd,
          createDate: params.createDate,
          status: params.status
        });
        return { result };
      }

      async delete(id) {
        const result = await this.app.mysql.delete("users", {
          id: id
        });
        return { result };
      }

      async updated(params) {
        // // 如果主键是自定义的 ID 名称，如 self_id，则需要在 `where` 里面配置
        // const options = {
        //   where:{
        //     self_id:params.id
        //   }
        // }
        const row = {
          name: params.name,
          password: params.pwd,
          status: params.status
        };
        // const result = await this.app.mysql.update('users',row,options);
        const result = await this.app.mysql.update("users", row);
        return { result };
      }
    }

    module.exports = UserService;




