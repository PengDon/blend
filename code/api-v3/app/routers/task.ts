/*
 * @Author: don
 * @Date: 2020-12-28 13:49:58
 * @LastEditors: don
 * @LastEditTime: 2020-12-28 16:58:35
 * @Description:
 */
module.exports = app => {
  const { controller, router } = app;
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
};
