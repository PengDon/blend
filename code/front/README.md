# 前端展示项目 pc 端

## 不依赖手脚架搭建

### (最基础结构)具体步骤：

1. 建目录、建文件、初始化package文件
```sh
# 1
mkdir front
# 2
npm init
# 3
touch index.html
# 4
mkdir src && cd src
# 5
touch app.js && touch App.vue
# 6
cd .. && mkdir build && touch webpack.dev.js
```

2. 安装依赖插件
```sh
# 1
npm i vue
# 2 webpack-cli要与webpack-dev-server版本保持对应
npm i -D webpack webpack-cli@3 webpack-dev-server
# 3
npm i -D vue-loader vue-template-compiler
# 4
npm i -D html-webpack-plugin
```

3. 基础结构代码

* front/package.json
```json
{
  "name": "front",
  "version": "1.0.0",
  "description": "vue typescript webpack less route",
  "scripts": {
    "dev": "webpack-dev-server --port 3000 --hot --inline --devtool eval --config ./build/webpack.dev.js",
    "build": "webpack --progress --colors"
  },
  "author": "don",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^5.0.0",
    "vue-loader": "^15.9.6",
    "vue-template-compiler": "^2.6.12",
    "webpack": "^5.20.2",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "vue": "^2.6.12"
  }
}
```

* front/index.html
```sh
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

# front/src/app.js
```js
import Vue from 'vue'
import App from './App.vue'

new Vue({
    render: (h) => h(App)
}).$mount('#app')
```

# front/src/App.vue
```js
<template>
  <div>{{message}}</div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  components: {},
})
export default class App extends Vue {
  message = '内容区域'
}
</script>
```
# front/build/webpack.dev.js
```js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/app.js'),
  mode: 'development',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: 'index.html', // 模版路径
        filename: 'index.html', // 生成的文件名称
        inject: 'body' // 指定插入的<script>标签在body底部
      }
    ),
    new VueLoaderPlugin()
  ],
  devServer: {
    disableHostCheck: true
  }
}
```

### 添加typescript支持

1. 安装ts依赖
```sh
npm i -S vue-class-component vue-property-decorator
npm i -D ts-loader typescript
```

2. 添加文件，修改配置

* front/tsconfig.json
```json
{
  "include": ["src/**/*"],
  "exclude": ["node_modules"],
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "allowJs": true,
    "module": "esnext",
    "target": "es5",
    "moduleResolution": "node",
    "isolatedModules": true,
    "lib": ["dom", "es5", "es2015.promise"],
    "sourceMap": true,
    "pretty": true
  }
}
```

* front/src/vue-shim.d.ts
```json
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
```

* front/build/webpack.dev.js
```js
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/app.ts'),
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: 'index.html', // 模版路径
        filename: 'index.html', // 生成的文件名称
        inject: 'body', // 指定插入的<script>标签在body底部
        hash: true
      }
    ),
    new VueLoaderPlugin()
  ],
  devServer: {
    disableHostCheck: true
  }
}
```

* front/package.json
```json
{
  "name": "front",
  "version": "1.0.0",
  "description": "vue typescript webpack less route",
  "scripts": {
    "dev": "webpack-dev-server --port 3000 --hot --inline --devtool eval --config ./build/webpack.dev.js",
    "build": "webpack --progress --colors"
  },
  "author": "don",
  "license": "ISC",
  "devDependencies": {
    "html-webpack-plugin": "^5.0.0",
    "ts-loader": "^8.0.15",
    "typescript": "^4.1.3",
    "vue-loader": "^15.9.6",
    "vue-template-compiler": "^2.6.12",
    "webpack": "^5.20.2",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.2"
  },
  "dependencies": {
    "vue": "^2.6.12",
    "vue-class-component": "^7.2.6",
    "vue-property-decorator": "^9.1.2"
  }
}

```


* 文件后缀修改
```js
front/src/app.js 修改为 front/src/app.ts
```



























