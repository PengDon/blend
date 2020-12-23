/*
 * @Author: don
 * @Date: 2020-12-23 09:49:35
 * @LastEditors: don
 * @LastEditTime: 2020-12-23 09:50:42
 * @Description:
 */
module.exports = app => {
  const { controller, router } = app;

  router.get('/project', controller.project.index);
};
