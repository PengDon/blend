module.exports = app => {
  // 查询所有用户信息
  app.router.get('/getUserList', app.controller.user.list);
  // 根据name查询用户
  // app.router.get('/user/:name', app.controller.user.getUserByName);

  app.router.post('/user', app.controller.user.login);


};