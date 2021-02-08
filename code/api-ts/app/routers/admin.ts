/*
 * @Author: don
 * @Date: 2021-02-07 09:56:20
 * @LastEditors: don
 * @LastEditTime: 2021-02-07 11:05:58
 * @Description: 
 */
module.exports = app => {
  const { controller, router } = app;
  // 请求前缀
  const prefix: string = '/api/admin/v1';
  // ====> comm
  router.get(`${prefix}/`, controller.home.index);
  router.get(`${prefix}/demo`, controller.home.demo);
  // ====> product
  router.get(`${prefix}/product`, controller.product.index);
  // ====> project
  router.get('/project', controller.project.index);
  // ====> task
  // 查询所有
  router.get('/task', controller.task.index);
  // 根据id查询
  router.get('/task/:id', controller.task.show);
  // 新增任务
  router.post('/task', controller.task.create);
  // 修改部分数据
  router.patch('/task/:id', controller.task.update);
  // 根据id修改所有数据
  router.put('/task/:id', controller.task.update);
  // 根据id删除任务
  router.delete('/task/:id', controller.task.destroy);
  // ====> user
  router.get('/users', controller.user.index);
};
