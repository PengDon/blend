import Vue from 'vue'
import modal from './Notify.vue'
let v = Vue.extend(modal)
let vm = new v()
let oDiv = null
// message,delay=3000
const Notify = (options) => {
    // let v = Vue.extend(modal)
    // let vm = new v()
    if(oDiv) return false
    oDiv = document.createElement('div')
    vm.$mount(oDiv)
    vm.msg = options.mes
    document.body.appendChild(vm.$el)
    setTimeout(() => {
      document.body.removeChild(vm.$el)
      oDiv = null;
      options.callback && options.callback();
    }, options.timeout || 3000)
}

export default Notify