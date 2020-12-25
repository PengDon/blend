/*
 * @Author: don
 * @Date: 2020-12-25 16:36:41
 * @LastEditors: don
 * @LastEditTime: 2020-12-25 16:36:59
 * @Description: 
 */
module.exports = app => {
  const { controller, router } = app;

  router.get('/users', controller.user.index);
};
