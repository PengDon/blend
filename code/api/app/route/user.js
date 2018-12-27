module.exports = app => {
  // 查询所有用户信息
  app.router.get('/api/v1/getUserList', app.controller.user.list);
  //根据name查询用户
  app.router.get('/user/:name', app.controller.user.getUserByName);
  // 用户登录
  app.router.post('/api/v1/login', app.controller.user.login);


};