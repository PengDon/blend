/*
 * @Author: don
 * @Date: 2020-12-22 10:26:09
 * @LastEditors: don
 * @LastEditTime: 2020-12-22 11:42:43
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
  };

  config.security = {
    csrf: {
      ignore: [ '/api' ],
    },
  };

  config.cluster = {
    listen: {
      path: '',
      port: 7002,
      hostname: '127.0.0.1',
    },
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
