/*
 * @Author: don
 * @Date: 2020-12-22 16:53:04
 * @LastEditors: don
 * @LastEditTime: 2020-12-22 17:28:38
 * @Description:
 */
module.exports = app => {
  const { controller, router } = app;

  router.get('/product', controller.product.index);
};
