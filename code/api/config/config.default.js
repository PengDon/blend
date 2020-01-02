module.exports = appInfo => {
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1545363397110_3339";

    // add your config here
    config.middleware = [];

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
