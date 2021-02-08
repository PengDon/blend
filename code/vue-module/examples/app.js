import Vue from 'vue'
import App from './App.vue'

// 以下四种方式都可用

// import xxui from 'xxui'
// Vue.use(xxui)

import xxui from '@'
Vue.use(xxui)

// import Commheader from '@/header'
// Vue.use(Commheader)

// import xxui from '../lib/index'
// Vue.use(xxui)




new Vue({
    render: (h) => h(App)
}).$mount('#app')