module.exports = app => {
  // 查询所有用户信息
  app.router.get('/getUserList', app.controller.user.list);


};