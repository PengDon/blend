/*
 * @Author: don
 * @Date: 2020-01-22 12:49:17
 * @LastEditTime : 2020-01-22 16:47:16
 * @Description: file content
 */
import Dialog from './comp/dialog'
import Notify from './comp/notify'

const components: { [propsName: string]: any } = {
  Dialog,
  Notify
}

const install = (Vue: any): void => {
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
if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue)
}

export default XX
