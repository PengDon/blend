import 'egg'

declare module 'egg' {
  // TypeScript 独有的坑，需要在根目录下的 typings/index.d.ts 文件里声明一个 any 类型，否则会类型错误
  interface Application {
    jwt: any
    mysql: any
  }
}
