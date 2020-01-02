import { Api } from "@/api";

class LoginService {
  /**
   * 登录接口(微信授权后调用)
   *
   * @param {{ code: string}} postData   code 微信授权后，通过回调地址返回
   * @returns {Promise<any>}
   * @memberof LoginService
   */
  public async login(postData: { code: string }): Promise<any> {
    // return await Api('wxLogin',postData);
  }
}

export default new LoginService();
