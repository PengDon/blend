/*
 * @Author: don
 * @Date: 2021-02-07 11:12:28
 * @LastEditors: don
 * @LastEditTime: 2021-02-08 15:40:53
 * @Description:
 */
module.exports = (app) => {
  const { router, controller } = app

  const prefix = `/api/admin/v1`
  // 访问： http://127.0.0.1:7001/api/admin/v1/home

  // ===> home
  router.get(`${prefix}/home`, controller.home.index) 
  
  // ===> user
  router.get(`${prefix}/user`, controller.user.list) 
  router.get(`${prefix}/user/:id`, controller.user.one) 
  router.post(`${prefix}/user`, controller.user.add) 
  router.del(`${prefix}/user/:id`, controller.user.delete)
  router.put(`${prefix}/user/:id`, controller.user.update)
  
}
