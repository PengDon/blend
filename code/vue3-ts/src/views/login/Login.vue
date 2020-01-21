<template>
  <div class="sign">
    <div class="sign-area">
      <div class="sign-item">
        <span class="item-text">用户名：</span>
        <span class="text-input"><input type="text" /></span>
      </div>
      <div class="sign-item">
        <span class="item-text">密码：</span>
        <span class="text-input"><input type="text" /></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from "vue-property-decorator";
import { storage } from "@/utils";
import { authToken, toBack } from "@/config";

@Component({})
export default class Login extends Vue {
  created() {
    this.auth();
  }

  // 去微信授权
  private auth(): void {
    // // 构造授权认证URL地址+回调地址+请求参数数据
    // // 回调参数
    // const callbackParams:string = (this.$route.query as any).backUrl;
    //  // 如果发现有回调方法，则存储
    // if(callbackParams){
    //   storage.setItem(toBack,callbackParams);
    // }
    // // 回调地址
    // const callbackURL = `${location.protocol}//${process.env.VUE_APP_domain}/#/transition`;
    // // 授权地址
    // const authURL = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${process.env.VUE_APP_appid}&redirect_uri=${encodeURIComponent(callbackURL)}&response_type=code&scope=snsapi_userinfo&v=${new Date().getTime()}#wechat_redirect`;
    // // 跳到微信登录授权地址
    // window.location.href = authURL;
  }
}
</script>
<style scoped lang="less">
.sign {
  width: 100%;
  min-height: 750px;
  display: flex;
  // flex-direction: column;
  align-items: center;
  justify-content: center;
  .sign-area {
    background: rgba(2, 0, 0, 0.08);
    border-radius: 16px;
    box-shadow: 0 0 40px 10px #d8d8d8;
    width: 260px;
    height: 160px;
    font-size: 20px;
    padding: 20px 30px;
  }
}
</style>
