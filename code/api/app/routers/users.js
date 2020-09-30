/*
 * @Author: don
 * @Date: 2020-08-17 11:22:51
 * @LastEditors: don
 * @LastEditTime: 2020-09-30 17:25:19
 * @Description:
 */
module.exports = (app) => {
  const { router, controller } = app
  router.get('/users', controller.users.findAll)
  router.get('/users/:id', controller.users.findOne)
  router.post('/users', controller.users.add)
  router.put('/users/:id', controller.users.update)
  router.del('/users/:id', controller.users.delete)
  router.get('/user/info', controller.users.userInfo) // 获取已登录的用户信息
}
