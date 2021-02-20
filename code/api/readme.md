


## 安装插件

* [egg-mongoose](https://www.npmjs.com/package/egg-mongoose)
```sh
npm i egg-mongoose --save
```








## pm2

```sh
# 显示所有进程日志
pm2 logs
# 停止所有进程
pm2 stop all 
# 重启所有进程
pm2 restart all
# 0秒停机重载进程 (用于 NETWORKED 进程)
pm2 reload all
# 停止指定的进程
pm2 stop 0
# 重启指定的进程
pm2 restart 0
# 产生 init 脚本 保持进程活着
pm2 startup
# 运行健壮的 computer API endpoint
pm2 web
# 杀死指定的进程
pm2 delete 0
# 杀死全部进程
pm2 delete all
# 列出由pm2管理的所有进程信息,还会显示一个进程会被启动多少次，因为没处理的异常。
pm2 list
# 监视每个node进程的CPU和内存的使用情况
pm2 monit 
# 用pm2启动指定文件
pm2 start server.js
```


## 注意

* 问题1
  
使用Egg写接口时，当请求为POST请求，使用ctx.request.body即可接收到参数。如果Body为form-data时，用ctx.request.body是接收不到参数的，那是因为Egg封装里面只接收x-www-form-urlencoded这种类型我们只要将Body的类型改为x-www-form-urlencoded即可用ctx.request.body接收参数


* 问题2

现在不能同时连接mysql和mongodb数据库









