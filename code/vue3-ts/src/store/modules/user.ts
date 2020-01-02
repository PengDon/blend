import UserService from "@/servers/User";
import { errorCaptured } from "@/utils";

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    // 查询所有用户信息
    async getAllUser() {
      return await errorCaptured(UserService.getAllUser)();
    }
  }
};
