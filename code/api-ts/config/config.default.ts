/*
 * @Author: don
 * @Date: 2020-12-22 10:26:09
 * @LastEditors: don
 * @LastEditTime: 2020-12-24 14:14:44
 * @Description:
 */
import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1608603956136_5491';

  // add your egg config in here
  config.middleware = [];

  // add mongodb connect
  config.mongoose = {
    url: 'mongodb://127.0.0.1/work',
    options:{
      // 用于解决：mongoDb数据库报错问题，报错信息“current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. 
      // To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor”
      useUnifiedTopology : true
    }
  };

  config.security = {
    csrf: {
      ignore: [ '/api' ]
    }
  };

  config.cluster = {
    listen: {
      path: '',
      port: 7001,
      hostname: '0.0.0.0'
    }
  };

  // nunjucks view
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.njk': 'nunjucks'
    }
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig
  };
};
