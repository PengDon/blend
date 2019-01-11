# nodejs 爬虫

## node 简单爬取

### 涉及node模块
* 获取网页内容    （http\request\superagent等）
* 刷选网页信息    （cheerio）
* 输出或存储信息  （console\fs\mongodb\mysql等）

### simple 目录，简单node爬虫实现
```
# 初始化配置
npm init
# 安装依赖
cnpm i -S request cheerio mysql async
# 入口文件app.js，执行以下命令会把数据存入数据库
node app.js
```
## crawler 目录， node 爬虫框架
```
# 初始化配置
npm init
# 安装依赖 [crawler](https://www.npmjs.com/package/crawler)
cnpm i -S crawler
# 入口文件index.js，执行以下命令会把数据存入数据库
node index.js

```

## region 目录， 爬取国家统计局 2016年 统计用区划代码和城乡划分代码
```
# 初始化配置
npm init
# 安装依赖
cnpm i -S crawler lodash temme
# 入口文件app.js，执行以下命令会把数据存入数据库
node app.js

```