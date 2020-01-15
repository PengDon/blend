module.exports = app => {
  // 路由接口请求前缀
  app.router.prefix(`/api/${app.config.version}`);
  require("./routers/login")(app);
  require("./routers/home")(app);
  require("./routers/users")(app);
};
