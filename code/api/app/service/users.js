/*
 * @Author: don
 * @Date: 2021-02-07 11:12:57
 * @LastEditors: don
 * @LastEditTime: 2021-02-08 13:42:04
 * @Description: 
 */
const Service = require("egg").Service;

class UserService extends Service {
  async findAll () {
    const res = await this.app.mysql.query(
      `select * from users`
    );
    return res;
  }

  async findOne (id) {
    const res = await this.app.mysql.get("users", { userId: id });
    return res;
  }

  async add (params) {
    const res = await this.app.mysql.insert("users", {
      name: params.name,
      roleId: params.roleId
    });
    return res;
  }

  async delete (id) {
    const res = await this.app.mysql.delete("users", {
      userId: id
    });
    return res;
  }

  async update (id, params) {
    // 如果主键是自定义的 ID 名称，如 userId，则需要在 `where` 里面配置
    const options = {
      where: {
        userId: id
      }
    };
    const row = {
      name: params.name,
      password: params.password,
      status: params.status
    };
    const res = await this.app.mysql.update("users", row, options);
    return res;
  }
}

module.exports = UserService;