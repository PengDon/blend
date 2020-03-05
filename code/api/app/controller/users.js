const Controller = require("egg").Controller;

class UserController extends Controller {
  async findAll () {
    const { ctx, service } = this;
    // 从session获取登录用户信息
    // ctx.session.userInfo;
    // 判断当前登录用户角色以及权限[1: 超级管理员 | 2: VIP用户 | 3: 普通用户]
    // 调用 Service 进行业务处理
    const res = await service.users.findAll(ctx.session.userInfo.roleId);
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
