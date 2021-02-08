## 中间件 {#编写中间件}

参考:[https://eggjs.org/en/basics/middleware.html](https://eggjs.org/en/basics/middleware.html%29%29\)

基本写法结构

```
# 基本结构

# app/middleware/file_name.js

module.exports = options => {
  return async function function_name(ctx, next) {
    // coding
  };
};

# 在config/config.default.js文件里面进行配置

config.middleware = ['function_name']; // 数组的顺序为中间件执行的顺序
```

例如：添加404错误处理中间件

```
# app/middleware/notfound_handler.js

module.exports = () => {
    return async function notFoundHandler(ctx, next) {
      await next();
      if (ctx.status === 404 && !ctx.body) {
        if (ctx.acceptJSON) {
          ctx.body = { error: 'Not Found' };
        } else {
          ctx.body = '<h1>Page Not Found</h1>';
        }
      }
    };
  };

# 在config/config.default.js文件里面进行配置

config.middleware = ["auth",'notfoundHandler']; // 数组的顺序为中间件执行的顺序
```

## router 中使用中间件 {#router-中使用中间件}

```
# 以 app/routers/home.js为例

# 方法一
module.exports = app => {
  const { router, controller } = app;
  const auth = app.middleware.auth(); // 引入auth中间件,括号内可以传递参数给中间件{key: value}
  router.get("/home", controller.home.index);
};

# 方法二

module.exports = app => {
  const { router, controller } = app;
  router.get("/home", auth, controller.home.index); // 只在/home路由使用，放到第二个参数
};
```



