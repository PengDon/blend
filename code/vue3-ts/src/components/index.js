/*
 * @Author: don
 * @Date: 2020-01-22 12:49:17
 * @LastEditTime : 2020-01-22 16:47:16
 * @Description: file content
 */
// import Dialog from './comp/dialog'
import Notify from './comp/notify'

const components = {
  // Dialog,
  Notify
}

const install = (Vue) => {
  // Object.keys(components).forEach(component =>
  //   Vue.component(component, components[component])
  // )

  Vue.prototype.$dialog = {
    notify: Notify
  }
}

const XX = {
  install,
  ...components
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default XX
