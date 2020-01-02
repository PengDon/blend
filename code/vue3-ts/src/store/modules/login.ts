import LoginService from "@/servers/Login";
import { errorCaptured } from "@/utils";

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    // 登录的接口
    async wxLogin(_: any, postData: { code: string }) {
      return await errorCaptured(LoginService.login)(postData);
    }
  }
};
