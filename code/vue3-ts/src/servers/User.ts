import { Api } from "@/api";

class UserService {
  // 获取所有用户信息
  public async getAllUser(): Promise<any> {
    return await Api("queryUsers");
  }
}

export default new UserService();
