import Vue from 'vue'

// 全局方法 this. 的调用方式
declare module 'vue/types/vue' {
  interface Vue {
      $api: any
  }
}