# vue-ts

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run prod
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

## 相关api文档
* [Vue CLI](https://cli.vuejs.org/zh/guide/)
* [Vue Router](https://router.vuejs.org/zh/)
* [Vue Test Utils](https://vue-test-utils.vuejs.org/zh/guides/)
* [Vuex](https://vuex.vuejs.org/zh/)
* [Webpack4^](https://webpack.js.org/concepts/)
* [webpack-chain](https://github.com/neutrinojs/webpack-chain)
* [puppeteer](https://zhaoqize.github.io/puppeteer-api-zh_CN/#/)
* [ESLint 中文](http://eslint.cn/)
* [ESLint](https://eslint.vuejs.org)
* [Jest](https://jestjs.io/)
* [Typescript](https://typescript.bootcss.com/)
* [Configuration Reference](https://cli.vuejs.org/config/).

## 项目依赖插件


### 简写说明
* -S --> --save  // 生产阶段的依赖
* -D --> --save-dev  // 开发阶段的依赖

### px2rem 适配方案

* [postcss-px2rem](https://www.sogou.com/link?url=hedJjaC291M94sQej51f1MOnl7gebL35rOr7Ga-Xdn_EJTc8qaFczF5A7z5QkkP-)
```
npm install  postcss-px2rem -S
```
* [lib-flexible](https://github.com/amfe/lib-flexible)
```
npm install lib-flexible -S
```
* 操作步骤：
```
1、 在main.js文件引入
import 'lib-flexible/flexible'

2、 删除或注释public/index.html文件中的以下标签
<meta name="viewport" content="width=device-width,initial-scale=1.0">

3、 在vue.config.js文件中修改配置
postcss: {
  plugins: [
    require('postcss-px2rem')({
      remUnit: 75, // 设计稿宽度/10
    }),
  ],
},
```