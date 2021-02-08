# vue组件库基础模板(不用手脚架)

## 搭建一个简单的vue基础框架
1. 分好目录结构
```sh
# 用于放webpack配置文件
mkdir build
# 用于放组件源代码
mkdir packages
# 用于存放组件demo
mkdir examples

```

2. 安装相关依赖
```sh
# vue
npm install -save vue

# 在vue-loader@15.x之后, 必须使用VueLoaderPlugin插件
npm install --save-dev vue-loader vue-template-compiler  

# webpack 
npm install --save-dev webpack webpack-cli@3 webpack-dev-server html-webpack-plugin

# loader
npm install --save-dev css-loader style-loader url-loader file-loader less less-loader

# es6->es5
npm install --save-dev babel-loader @babel/core @babel/preset-env

# 组件按需引入
npm install --save-dev babel-plugin-import

```

## 封装一个弹框组件
```js
// toast
```


## 注意点
1. [require.context](https://webpack.docschina.org/guides/dependency-management/#requirecontext) 这个是webpack运行时才能用，要调试看效果，需要打开浏览器控制台看日志。
   

## 添加storybook
```sh
npx sb init
```

## 参考

* [vue](https://cn.vuejs.org/)
* [vue-loader](https://vue-loader.vuejs.org/zh/guide/)
* [webapck](https://webpack.docschina.org/)
* [less](https://less.bootcss.com/)
* [Babel](https://www.babeljs.cn/)
* [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)
* [webpack v4.15.1](https://webpack.html.cn/)
* [storybook](https://storybook.js.org/)
* []()
* []()
* []()