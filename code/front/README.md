# 前端展示项目 pc 端

## 不依赖手脚架搭建

### 具体步骤：

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

