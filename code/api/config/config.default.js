module.exports = appInfo => {
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1545363397110_3339";

  // add your config here
  config.middleware = ["auth"];
  // auth中间件的配置方法一
  // 中间件匹配路由
  config.auth = {
    enable: true, // 是否开启该中间件，不写默认开启
    match: ["/login"] // 只匹配指定路由，反之如果只忽略指定路由，可以用ignore
    //   ignore:['/login'] // 不要与match一起使用，避免冲突
  };

  config.security = {
    csrf: {
      enable: false
    }
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
