module.exports = app => {
  // 查询所有用户信息
  app.router.get('/api/v1/getUserList', app.controller.user.list);
  //根据name查询用户
  app.router.get('/api/v1/user/:name', app.controller.user.getUserByName);
  // 用户登录
  app.router.post('/api/v1/login', app.controller.user.login);
  // 修改用户登录状态
  app.router.get('/api/v1/setUser/:userId', app.controller.user.setUserStatus);
  // 添加用户信息
  app.router.post('/api/v1/addUser', app.controller.user.addUser);
  // 根据userId删除对应用户信息
  app.router.get('/api/v1/delUser/:userId', app.controller.user.delUser);

  // github授权登录
  app.passport.mount('github');
  app.router.get('/api/v1/login/github',app.controller.user.loginByGithub);
  app.router.get('/api/v1/logout',app.controller.user.logout);

};