/*
 * @Author: don
 * @Date: 2020-12-28 13:49:58
 * @LastEditors: don
 * @LastEditTime: 2020-12-28 16:42:32
 * @Description:
 */
module.exports = app => {
  const { controller, router } = app;

  router.get('/task', controller.task.index);
  router.get('/task/:id', controller.task.show);
  router.post('/task', controller.task.create);
  router.patch('/task/:id', controller.task.update);
  router.delete('/task/:id', controller.task.destroy);
};
