/*
 * @Author: don
 * @Date: 2020-04-21 17:01:46
 * @LastEditTime: 2020-04-21 17:02:21
 * @Description: file content
 */

const isProduction = process.env.NODE_ENV === 'production'
module.exports = {
  css: {
    // 为所有的 CSS 及其预处理文件开启 CSS Modules。
    // 这个选项不会影响 `*.vue` 文件。
    requireModuleExtension: false,
    // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: isProduction ? true : false,
    sourceMap: isProduction ? false : true, // 开发人员定位问题
    // 为预处理器的 loader 传递自定义选项。
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75 // 设计稿宽度/10
          })
        ]
      }
    }
  },
}