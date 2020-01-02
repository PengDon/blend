## 路由配置

在app目录新建routers文件夹

```
# 新建routers目录
mkdir routers
cd routers
touch home.js

# app/routers/home.js
module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
};

touch users.js

# app/ruters/users.js
module.exports = app => {
  const { router, controller } = app;
  router.prefix("/api/v1");
  router.get("/users", controller.users.findAll);
  router.get("/users/:id", controller.users.findOne);
  router.post("/users", controller.users.add);
  router.put("/users", controller.users.update);
  router.del("/users/:id", controller.users.delete);
};
```

* 修改route.js文件

```
module.exports = app => {
  require("./routers/home")(app);
  require("./routers/users")(app);
};
```



