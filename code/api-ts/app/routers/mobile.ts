/*
 * @Author: don
 * @Date: 2021-02-07 09:55:51
 * @LastEditors: don
 * @LastEditTime: 2021-02-07 11:06:12
 * @Description: 
 */
module.exports = app => {
  const { controller, router } = app;
  // 请求前缀
  const prefix: string = '/api/h5/v1';
  router.get(`${prefix}/product`, controller.product.index);
};
  