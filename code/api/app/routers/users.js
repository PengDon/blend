module.exports = app => {
  const { router, controller } = app;
  router.get("/users", controller.users.findAll);
  router.get("/users/:id", controller.users.findOne);
  router.post("/users", controller.users.add);
  router.put("/users/:id", controller.users.update);
  router.del("/users/:id", controller.users.delete);
};
