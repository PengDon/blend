/*
 * @Author: don
 * @Date: 2021-02-08 11:29:01
 * @LastEditors: don
 * @LastEditTime: 2021-02-08 15:41:25
 * @Description: 
 */
const Controller = require("egg").Controller;

class UserController extends Controller {
    // 用户列表
    async list(){
        const {ctx,service} = this;
        const result = await service.users.findAll();
        ctx.body = result
    }
    
    // 根据id查询用户
    async one(){
        const {ctx,service} = this;
        const id = ctx.params.id;
        const result = await service.users.findOne(id);
        ctx.body = result
    }
    
    // 添加新用户
    async add(){
        const {ctx,service} = this;
        const params = ctx.request.body;
        const result = await service.users.add(params);
        ctx.body = result;
    }

    // 根据id删除用户
    async delete(){
        const {ctx,service} = this;
        const id = ctx.params.id;
        const result = await service.users.delete(id);
        ctx.body = result;
    }

    // 根据id修改用户信息
    async update() {
        const {ctx,service} = this;
        const id = ctx.params.id;
        const params = ctx.request.body;
        const result = await service.users.update(id,params);
        ctx.body = result;
    }

}

module.exports = UserController;









