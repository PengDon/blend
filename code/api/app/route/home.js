module.exports = app => {
  
  // 显示参数
  app.router.get('/:name', app.controller.home.show);
};