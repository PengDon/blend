/*
 * @Author: don
 * @Date: 2021-02-09 14:52:49
 * @LastEditors: don
 * @LastEditTime: 2021-02-09 16:23:39
 * @Description:
 */
const Service = require('egg').Service

class SideBarService extends Service {
  async add(params) {
    const res = await this.app.mysql.insert(`sidebar`, params)
    return res
  }
  
  async queryAll(){
    const res = await this.app.mysql.query('select * from sidebar')
    return res
  }

}

module.exports = SideBarService
