import Vue from 'vue'
import { authToken } from '@/config'
import { storage } from './storage'

export const auth = (
  to: any,
  from: any,
  next: (arg0: { name: string; query: { backUrl: any } }) => void
) => {
  // 如果是要授权登录的且当前本地存储中不存在跳转到登录页面
  if (!to.meta.unauth && !storage.getItem(authToken)) {
    next({ name: 'login', query: { backUrl: to.fullPath } })
  }
}
