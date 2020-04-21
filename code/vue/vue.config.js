/*
 * @Author: don
 * @Date: 2020-04-21 17:24:49
 * @LastEditTime: 2020-04-21 17:55:08
 * @Description: file content
 */
const path = require('path')
const pjson = require('./package.json')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  // 部署应用时的基本 URL  [参考](https://cli.vuejs.org/zh/config/#publicpath)
  // publicPath: isProduction ? '/服务器上项目所在文件夹名称/' : '/',
  // '/' 可以解决history模式下，进入子页面刷新报错问题
  publicPath: isProduction ? '/edu/' : '/',
  // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
  outputDir: 'dist/edu',
  // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: './static',
  // 生产环境是否生成soureceMap
  productionSourceMap: isProduction ? false : true,
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  // indexPath: 'index.html', //Default: 'index.html'
  // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，
  //  你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变)
  filenameHashing: false,
  // 启动并发数
  // 是否为 Babel 或 TypeScript 使用 thread-loader
  parallel: require('os').cpus().length > 1,
  // // 构建多页面应用，页面的配置
  // pages: {
  //   index: {
  //     // page 的入口
  //     entry: 'src/index/main.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'index.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   },
  //   // 当使用只有入口的字符串格式时，
  //   // 模板会被推导为 `public/subpage.html`
  //   // 并且如果找不到的话，就回退到 `public/index.html`。
  //   // 输出文件名会被推导为 `subpage.html`。
  //   subpage: 'src/subpage/main.js'
  // },
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码 (在生产构建时禁用 eslint-loader)
  // 有效的值：`true` | `false` | `"error"`设置为 `"error"` 时，检查出的错误会触发编译失败。
  lintOnSave: isProduction ? false : true,
  // 是否使用包含运行时编译器的 Vue 构建版本
  // 设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右
  runtimeCompiler: false,
  // Babel 显式转译列表
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来
  transpileDependencies: [],
  // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性（注：仅影响构建时注入的标签）
  crossorigin: '',
  // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)
  integrity: false,
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中
  // 如果你需要基于环境有条件地配置行为，或者想要直接修改配置，那就换成一个函数 (该函数会在环境变量被设置之后懒执行)。
  // 该方法的第一个参数会收到已经解析好的配置。在函数内，你可以直接修改配置，或者返回一个将会被合并的对象
  configureWebpack: config => { },
  // 对内部的 webpack 配置（比如修改、增加Loader选项）(链式操作)
  chainWebpack: (config) => { },
  // 可以用来传递任何第三方插件选项
  pluginOptions: {},
  // css的处理
  css: {
    // 项目package.json查看@vue/cli-service版本号进行配置
    // v3用modules v4用requireModuleExtension
    // 当为true时，css文件名可省略 module 默认为 false
    // modules: true,
    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    requireModuleExtension: false,
    // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中,当作为一个库构建时，你也可以将其设置为 false 免得用户自己导入 CSS
    // 默认生产环境下是 true，开发环境下是 false
    extract: isProduction ? true : false,
    // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
    sourceMap: isProduction ? false : true,
    // 为预处理器的 loader 传递自定义选项。
    // 向 CSS 相关的 loader 传递选项(支持 css-loader postcss-loader sass-loader less-loader stylus-loader)
    loaderOptions: {
      // px to rem
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75 // 设计稿宽度/10
          })
        ]
      }
    }
  },
  // 配置开发服务器
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    host: '0.0.0.0',
    port: 8080,
    compress: true, // 自动压缩
    open: false, // 自动打开浏览器
    inline: true, // 页面自动刷新
    hot: true, // 热更新,实时更新
    https: false,
    disableHostCheck: true, // 关闭host检查
    proxy: {
      // 配置跨域
      '/api': {
        // 需要代理的接口服务器地址
        target: 'https://127.0.0.1:7001',
        secure: false, // 如果是http接口，需要配置该参数
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': ''
        // },
        ws: true,
      }
    }
  }
}
}
