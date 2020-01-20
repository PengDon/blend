import { Service } from 'egg';

/**
 * User Service
 */
export default class User extends Service {
  /**
   * 获取用户列表
   */
  public async getUserList() {
    return await this.app.mysql.query(
      'select *,r.roleName from users u,roles r where u.roleId = r.roleId',
    );
  }
}
