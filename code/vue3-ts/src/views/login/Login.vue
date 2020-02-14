<template>
  <div class="sign">
    <div class="sign-area">
      <div class="sign-item">
        <span class="item-text">用户名：</span>
        <span class="item-input"><input type="text"
                 v-model="params.name"
                 placeholder="请输入用户名"
                 maxlength="10" /></span>
      </div>
      <div class="sign-item">
        <span class="item-text">密码：</span>
        <span class="item-input"><input type="password"
                 v-model="params.password"
                 placeholder="请输入密码"
                 maxlength="12" /></span>
      </div>
      <span class="login-btn"
            v-on:click="check">登录</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import { storage } from "@/utils";
import { authToken, toBack } from "@/config";
import { Action } from "vuex-class";

@Component({
  components: {}
})
export default class Login extends Vue {
  @Action('login/upLogin') private loginUp!: (postData:{name:string,password:string}) => Promise<any>

  created() {
    console.log(this.$dialog.notify);
  }

  private params: any = {
    name: null,
    password: null
  };

  private check(): void {

      // this.$dialog.notify({
      //   mes: "2秒后自动消失，点我也可以消失！",
      //   timeout: 2000,
      //   callback: () => {
      //     console.log("我走咯！");
      //   }
      // })

    let bool = true;
    if (!this.params.name) {
      this.$dialog.notify({
        mes: "请输入用户名!",
        timeout: 2000
      })
      bool = false;
    }
    if (!this.params.password) {
      this.$dialog.notify({
        mes: "请输入密码!",
        timeout: 2000
      })
      bool = false;
    }

    if (bool) {
      this.login();
    }
  }

  private async login() {
    console.log(this.params);
    let result = await this.loginUp(this.params);
    // 成功场景
    if(result&&result.code === 0){
      // 存储用户当前登录token
      storage.setItem(authToken,result.data.token);
      // 跳转到首页，history栈中不会有记录
      this.$router.replace('/')
    }else{
      // 失败场景
      this.$dialog.notify({
        mes:result.msg,
        timeout:2000
      })
    }
  }
}
</script>
<style scoped lang="less">
.sign {
  background: #000000;
  width: 100%;
  min-height: 750px;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  .sign-area {
    color: #ffffff;
    background: rgba(8, 0, 0, 0.16);
    border-radius: 16px;
    box-shadow: 0 0 40px 10px #d8d8d8;
    width: 320px;
    height: 200px;
    font-size: 18px;
    padding: 20px;
    .sign-item {
      border-bottom: 1px solid #e4e4e4;
      padding: 10px 0;
      > span {
        display: inline-block;
      }
      input {
        border: 0; // 去除未选中状态边框
        outline: none; // 去除选中状态边框
        background-color: rgba(0, 0, 0, 0); // 透明背景
        color: #ffffff;
        &::placeholder {
          color: #ffffff;
        }
      }
      .item-text {
        width: 35%;
        text-align: right;
      }
      .item-input {
        width: 65%;
      }
    }
    .login-btn {
      margin-top: 20px;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      display: block;
      color: #ffffff;
      background: #2f2f2f;
      border-radius: 16px;
    }
  }
}
</style>
