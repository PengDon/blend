/*
 * @Author: don
 * @Date: 2021-02-07 09:55:37
 * @LastEditors: don
 * @LastEditTime: 2021-02-07 09:58:51
 * @Description: 
 */
module.exports = app => {
  const { controller, router } = app;
  // 请求前缀
  const prefix: string = '/api/pc/v1';
  router.get(`${prefix}/product`, controller.product.index);
};