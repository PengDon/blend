import LoginService from "@/servers/Login";
import { errorCaptured } from "@/utils";

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    // 微信登录的接口
    async wxLogin(_: any, postData: { code: string }) {
      return await errorCaptured(LoginService.loginWx)(postData);
    },
    // 账号密码登录
    async upLogin(_:any,postData:{name:string,password:string}){
      return await errorCaptured(LoginService.loginUp)(postData);
    }

  }
};
