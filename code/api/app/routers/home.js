module.exports = app => {
  const { router, controller } = app;
  // auth中间件的配置方法二，与方法一取其一
  // const auth = app.middleware.auth(); // 引入auth中间件,括号内可以传递参数给中间件{key: value}
  // router.get("/home", auth, controller.home.index); // 只在/home路由使用，放到第二个参数
  router.get("/home", controller.home.index); // 不使用中间件
};
