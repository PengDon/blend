import { install } from 'vuex'
import Vue from 'vue'
import modal from './Notify.vue'

let Notify = {
  install: (Vue, options) => {}
}

Notify.install = function(Vue, options = { delay: 3000 }) {
  Vue.prototype.$notify = function(message, opt = {}) {
    options = { ...options, ...opt }
    let v = Vue.extend(modal)
    let vm = new v()
    let oDiv = document.createElement('div')
    vm.$mount(oDiv)
    vm.value = message
    document.body.appendChild(vm.$el)
    setTimeout(() => {
      document.body.removeChild(vm.$el)
    }, options.delay)
  }
}

export default Notify
