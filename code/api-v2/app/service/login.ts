import { Service } from 'egg'

/**
 * Login Service
 */
export default class Login extends Service {
  /**
   * checkName
   */
  public async checkName(params: { name: string }) {
    return await this.app.mysql.get('users', { name: params.name })
  }
}
