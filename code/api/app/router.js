'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 引用模块接口
  require('./route/user')(app);

  router.get('/', controller.home.index);
};
