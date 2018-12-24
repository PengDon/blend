'use strict';

// const mongoose = require('mongoose');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1545363397110_3339';

  // add your config here
  config.middleware = [];

  // // egg-mongo-native connect mongo
  // config.mongo = {
  //   client: {
  //     host: '127.0.0.1',
  //     port: '27017',
  //     name: 'psm',
  //     user: '',
  //     password: '',
  //   },
  // };

  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/psm',
    options: {},
  };

  return config;
};