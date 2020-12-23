/*
 * @Author: don
 * @Date: 2020-12-22 17:15:55
 * @LastEditors: don
 * @LastEditTime: 2020-12-23 16:10:37
 * @Description:
 */
module.exports = app => {
  const { controller, router } = app;
  // router.redirect('/', '/login', 302);
  router.get('/', controller.home.index);
  router.get('/demo', controller.home.demo);
};
