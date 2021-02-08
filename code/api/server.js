/*
 * @Author: don
 * @Date: 2021-02-07 11:04:16
 * @LastEditors: don
 * @LastEditTime: 2021-02-07 11:05:24
 * @Description: 
 * pm2启动项目：pm2 start server.js --name back-api
 */
const egg = require('egg');

const workers = Number(process.argv[2] || require('os').cpus().length);
egg.startCluster({
  workers,
  baseDir: __dirname,
});