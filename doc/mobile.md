### h5移动端

#### 项目原始结构
1. 确保node的版本，node版本如果过低，会出现create-react-app 项目名 创建工程后自动删除的情况。
1. 安装手脚架
```
cnpm i -g create-react-app
```
1. 创建react项目
```
create-react-app mobile
cd mobile
yarn start
```

#### 项目改造1
1. 项目反序列化,方便修改webpack配置文件
```
yarn eject
```
1. 更改src目录结构
* api 文件夹存放ajax请求
* assets文件夹存放静态资源
* components文件夹存放组件
* views文件夹存放页面
* routes文件夹存放路由
* stores文件夹存放数据
* utils文件夹存放工具类函数
1. 设置文件别名
* 修改config文件夹下的paths文件
```
module.exports = {
  ...
  appApi: resolveApp( 'src/api' ),
  appComponents: resolveApp('src/components'),
  appPages: resolveApp( 'src/pages' ),
  appRoutes: resolveApp('src/routes'),
  appStores: resolveApp( 'src/stores' ),
  appUtils: resolveApp('src/utils'),
  ...
```
* 修改 webpack 配置项 alias
```
alias: {
  ...
  api: paths.appApi,
  components: paths.appComponents,
  pages: paths.appPages,
  routes: paths.appRoutes,
  stores: paths.appStores,
  utils: paths.appUtils,
  ...
```
1.  安装路由组件 react-router
```
yarn add react-router react-router-dom
```
1. 添加数据管理mobx
```
yarn add mobx mobx-react
```
1. Mobx中装饰器语法的环境配置
```
# 安装装饰器所需依赖
cnpm i -D babel-plugin-transform-decorators-legacy
# 安装应用配置
cnpm i @babel/plugin-proposal-decorators
```
* 配置package.json
```
"babel": {
    "presets": [
      "react-app"
    ],
    "plugins": [
      [
        "@babel/plugin-proposal-decorators",
        {
          "legacy": true
        }
      ],
      [
        "@babel/plugin-proposal-class-properties",
        {
          "loose": true
        }
      ]
    ]
  },
```
