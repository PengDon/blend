/*
 * @Author: don
 * @Date: 2021-02-09 15:02:22
 * @LastEditors: don
 * @LastEditTime: 2021-02-09 16:25:04
 * @Description:
 */
const Controller = require('egg').Controller

class SideBarController extends Controller {
  async addOne() {
    const { ctx, service } = this
    const params = ctx.request.body
    const result = await service.sidebar.add(params)
    ctx.body = result
  }

  async all(){
    const {ctx,service} = this
    const result = await service.sidebar.queryAll()
    ctx.body = result
  }
}

module.exports = SideBarController
