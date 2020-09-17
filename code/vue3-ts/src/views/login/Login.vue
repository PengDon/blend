<template>
  <div class="sign">
    <p>Login</p>
    <div class="">username: <input v-model="params.name" type="text" /></div>
    <div class="">
      password: <input v-model="params.password" type="text" />
    </div>
    <div><button @click="check">login</button></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import { storage } from '@/utils'
import { authToken, toBack } from '@/config'
import { Action } from 'vuex-class'
import Notify from '@/components/notify'

@Component({
  components: {},
})
export default class Login extends Vue {
  @Action('login/upLogin') private loginUp!: (postData: {
    name: string
    password: string
  }) => Promise<any>

  created() {
    // Notify({ mes: 'notify is show' })
  }

  private params: any = {
    name: null,
    password: null,
  }

  private check(): void {
    // this.$dialog.notify({
    //   mes: "2秒后自动消失，点我也可以消失！",
    //   timeout: 2000,
    //   callback: () => {
    //     console.log("我走咯！");
    //   }
    // })

    let bool = true
    if (!this.params.name) {
      Notify({ mes: '请输入用户名!' })
      bool = false
    }
    if (!this.params.password) {
      Notify({ mes: '请输入密码!' })
      bool = false
    }

    if (bool) {
      this.login()
    }
  }

  private async login() {
    let result = await this.loginUp(this.params)
    // 成功场景
    if (result && result.code === 200) {
      // 存储用户当前登录token
      storage.setItem(authToken, result.data)
      // 跳转到首页，history栈中不会有记录
      this.$router.replace('/')
    } else {
      // 失败场景
      // 清空输入信息
      this.params.name = null
      this.params.password = null
      // 显示错误提示
      Notify({ mes: result.msg })
    }
  }
}
</script>
<style lang="less" scoped>
.sign {
}
</style>
