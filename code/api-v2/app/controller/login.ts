import { Controller } from 'egg'

export default class LoginController extends Controller {
  /**
   * login
   */
  public async signIn() {
    const { ctx, app } = this
    // 获取用户端传递过来的参数
    const data = ctx.request.body
    const res = await ctx.service.login.checkName({ name: data.name })
    // 进行验证 data 数据 登录是否成功
    if (res) {
      if (res.password === data.password) {
        // 成功过后进行一下操作
        // 生成 token 的方式
        const token = app.jwt.sign(
          {
            username: data.username // 需要存储的 token 数据
            // ......
          },
          app.config.jwt.secret
        )
        // 返回 token 到前端
        ctx.body = { msg: '登录成功', data: token }
      } else {
        ctx.body = { msg: '密码错误' }
      }
    } else {
      ctx.body = { msg: '用户不存在' }
    }
  }
}
