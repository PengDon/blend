<!--
 * @Author: don
 * @Date: 2020-12-22 18:57:04
 * @LastEditors: don
 * @LastEditTime: 2020-12-28 16:35:40
 * @Description:
-->

# eggjs+typescript+restful+mongodb

## 前提

- Node.js 8.x
- Typescript 2.8+

## 快速构建基本结构

```sh
mkdir work_manage && cd work_manage
npm init egg --type=ts
npm i
npm run dev
```

## mongodb 支持

```sh
npm i --save egg-mongoose
```

## Nunjucks 模板引擎

```sh
npm i egg-view-nunjucks --save
```

## 接口设计遵循 restful 规则

- 约定

```js
GET（Select）：查询
POST（Create）：创建
PUT（Replace）：替换
PATCH（Update）：更新
DELETE（Remove）：删除
```

- 例子

```sh
GET /movies
POST /movies
GET /movies/12
PUT /movies/12
PATCH /movies/12
DELETE /movies/12
```

## 参考

- [egg-mongoose](https://github.com/eggjs/egg-mongoose)
- [egg 官网](https://eggjs.org/zh-cn/)
- [Nunjucks](https://nunjucks.bootcss.com/)
- [egg-view-nunjucks](https://github.com/eggjs/egg-view-nunjucks)
- [mongoose 中文](http://www.mongoosejs.net/docs/guide.html)
- [typescript 文档](https://www.tslang.cn/docs/home.html)
- [restful 英文](http://www.restfulapi.nl/)
- [restful 中文](http://notes.veryide.com/restful.md)
- [jinja2 文档](https://jinja.palletsprojects.com/en/2.11.x/templates/#)
- [css 参考手册](https://www.runoob.com/cssref/css-reference.html)
- [ESLint](http://eslint.cn/)
- [mongoose 英文文档](https://mongoosejs.com/docs/index.html)
- []()
- []()
- []()
