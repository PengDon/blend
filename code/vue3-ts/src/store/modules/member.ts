import MemberService from '@/servers/Member';
import { errorCaptured } from '@/utils';

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    // 获取用户信息
    async getMemberInfo(_: any, postData: { id: number, token: number}) {
      return await errorCaptured(MemberService.getMemberInfo)(postData);
    },
  },
};
