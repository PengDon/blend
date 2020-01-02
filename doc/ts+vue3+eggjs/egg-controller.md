* 在controller目录新增users.js文件

```
const Controller = require("egg").Controller;

class UserController extends Controller {
  async findAll() {
    const { ctx } = this;
    const user = await ctx.service.users.findAll();
    ctx.body = user;
  }

  async findOne() {
    const { ctx } = this;
    const id = ctx.params.id;
    const user = await ctx.service.users.findOne(id);
    ctx.body = user;
  }

  async add() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.users.add(params);
    ctx.body = result;
  }

  async delete() {
    const { ctx } = this;
    const id = ctx.params.id;
    const result = await ctx.service.users.delete(id);
    ctx.boyd = result;
  }

  async update() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.users.update(params);
  }
}

module.exports = UserController;

```



