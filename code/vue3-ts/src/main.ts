import Vue from 'vue'
import App from './App.vue'
import { router } from '@/routers'
import store from '@/store'
import { axiosRequest } from '@/utils'
// 全局引用组件
// import XX from '@/components'
// Vue.use(XX)
import 'lib-flexible/flexible'

Vue.config.productionTip = false



// 初始化请求的封装函数
axiosRequest.init()

;(window as any)._vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
