<template>
  <div class="login">
     
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import {getQueryString , storage} from '@/utils';
import { authToken, toBack , member } from '@/config';

@Component({})
export default class Login extends Vue {
  @Action('login/wxLogin') private wxLogin!: (postData: { code: string }) => Promise<any>;
  @Action('member/getMemberInfo') private getMemberInfo!: (postData: {id: number, token: number }) => Promise<any>;

  created() {
    this.login()
  }
  
  // 用户微信授权登录获取用户token和基础信息
  private async login() {
      const postData = {code:getQueryString("code")};
      const result = await this.wxLogin(postData);
      if(result&&result.status === 200){
        // 存储用户当前登录token
        storage.setItem(authToken,result.data.token);
        this.getUserInfo(result.data.bizId,result.data.token);
        // 如果当前有回调信息
        if(storage.getItem(toBack)){
          this.$router.replace(storage.getItem(toBack));
        }else{
          this.$router.replace('/');
        }
      }else{
        console.log(result.msg);
      }
  }

  // 获取登录用户信息
  private async getUserInfo(id: number, token: number){
     const postData = {id:id,token:token};
     const result = await this.getMemberInfo(postData);
     if(result && result.status ===200){
       // 存储当前用户登录数据
       storage.setItem(member,result.data);
     }else{
       console.log(result.msg);
     }
  }
}
</script>
<style lang="less">
.login {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
}
</style>
