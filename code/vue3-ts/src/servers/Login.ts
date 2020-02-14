import { Api } from "@/api";

class LoginService {
  /**
   * 登录接口(微信授权后调用)
   *
   * @param { code: string} postData   code 微信授权后，通过回调地址返回
   * @returns {Promise<any>}
   * @memberof LoginService
   */
  public async loginWx(postData: { code: string }): Promise<any> {
    // return await Api('wxLogin',postData);
  }

  /**
   * 用户名密码登录
   * @param {name:string,password:string} postData 输入用户名密码调用接口校验
   * 
   */
  public async loginUp(postData:{name:string,password:string}):Promise<any> {
       return await Api('loginUp',postData);
  }
}

export default new LoginService();
