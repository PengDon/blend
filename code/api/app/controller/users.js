const Controller = require("egg").Controller;

class UserController extends Controller {
  async findAll () {
    const { ctx, service } = this;
    // 调用 Service 进行业务处理
    const res = await service.users.findAll();
    // 设置响应内容和响应状态码
    ctx.helper.success(ctx, res, '请求成功');
  }

  async findOne () {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const res = await service.users.findOne(id);
    ctx.helper.success(ctx, res);
  }

  async add () {
    const { ctx, service } = this;
    const params = ctx.request.body;
    const res = await service.users.add(params);
    ctx.helper.success(ctx, res);
  }

  async delete () {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const res = await service.users.delete(id);
    ctx.helper.success(ctx, res);
  }

  async update () {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const params = ctx.request.body;
    const res = await service.users.update(id, params);
    ctx.helper.success(ctx, res);
  }
}

module.exports = UserController;
