const Service = require("egg").Service;

class UserService extends Service {
  async findAll (roleId) {
    const res = await this.app.mysql.query(
      `select *,r.roleName from users u,roles r where u.roleId = r.roleId and u.roleId > ${roleId}`
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
