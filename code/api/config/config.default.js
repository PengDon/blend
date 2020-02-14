module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1545363397110_3339";

  // Middleware Floor API version
  config.version = 'v1';

  // add your config here
  config.middleware = ["auth", 'notfoundHandler', 'errorHandler']; // 数组的顺序为中间件执行的顺序

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // auth中间件的配置方法一
  // 中间件匹配路由
  config.auth = {
    enable: true, // 是否开启该中间件，不写默认开启
    match: ["/login"] // 只匹配指定路由，反之如果只忽略指定路由，可以用ignore
    //   ignore:['/login'] // 不要与match一起使用，避免冲突
  };

  // 只对 /api 前缀的 url 路径生效
  config.errorHandler = { match: '/api' }

  // token生成以及验证包
  config.jwt = {
    secret: '123456', // 自定义 token 的加密条件字符串
  };

  // 安全插件
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ 'http://localhost:8080' ], // 允许访问接口的白名单
  };


  // 跨域访问
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
  };

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: "localhost",
      // 端口号
      port: "3306",
      // 用户名
      user: "root",
      // 密码
      password: "usbw",
      // 数据库名
      database: "egg"
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  };

  return {
    ...config
  };
};
