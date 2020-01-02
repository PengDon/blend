import { Api } from "@/api";

class MemberService {
  /**
   * 根据bizId和token获取登录用户信息
   *
   * @param {{id: number, token: number}} postData
   * @returns {Promise<any>}
   * @memberof MemberService
   */
  public async getMemberInfo(postData: {
    id: number;
    token: number;
  }): Promise<any> {
    // return await Api('getMemberInfoById',postData);
  }
}

export default new MemberService();
