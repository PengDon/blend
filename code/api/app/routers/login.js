module.exports = app => {
  const { router, controller } = app;
  router.prefix("/api/v1");
  router.post("/login", controller.login.login);
};
