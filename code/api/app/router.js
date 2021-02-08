module.exports = (app) => {
  // 路由接口请求前缀
  // app.router.prefix(`/api/${app.config.version}`)
  require('./routers/admin')(app)
}
