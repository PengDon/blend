# pc

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org


## 开发流程
```
 model->service->controller->route->view
```

## eggjs手脚架
```
cnpm i egg-init -g
```

## 添加mongodb数据库支持
```
# [egg-mongoose](https://github.com/eggjs/egg-mongoose)
cnpm i egg-mongoose -S
```

## 添加统一验证
```
# [egg-validate](https://github.com/eggjs/egg-validate)
cnpm i egg-validate -S
```

## 添加视图模板
```
# [egg-view-ejs](https://github.com/eggjs/egg-view-ejs)
cnpm i egg-view-ejs  -S
```

## 添加时间插件
```
# [moment](http://momentjs.com/)
cnpm i moment -S
```

## 添加生成随机数的插件
```
# [string-random](https://www.npmjs.com/package/string-random)
cnpm i string-random -S
```

