const Service = require("egg").Service;

class UserService extends Service {
  async findAll() {
    // const user = await this.app.mysql.select("users");
    const user = await this.app.mysql.query(
      `select *,r.roleName from users u,roles r where u.roleId = r.roleId`
    );
    return { user };
  }

  async findOne(id) {
    const user = await this.app.mysql.get("users", { userId: id });
    return { user };
  }

  async add(params) {
    const date = new Date();
    const result = await this.app.mysql.insert("users", {
      name: params.name,
      roleId: params.roleId
    });
    return { result };
  }

  async delete(id) {
    const result = await this.app.mysql.delete("users", {
      userId: id
    });
    return { result };
  }

  async update(params) {
    // 如果主键是自定义的 ID 名称，如 userId，则需要在 `where` 里面配置
    const options = {
      where: {
        userId: params.id
      }
    };
    const row = {
      name: params.name,
      password: params.password,
      status: params.status
    };
    const result = await this.app.mysql.update("users", row, options);
    // const result = await this.app.mysql.update("users", row);
    return { result };
  }
}

module.exports = UserService;
