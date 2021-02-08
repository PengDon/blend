/*
 * @Author: don
 * @Date: 2021-02-07 11:09:55
 * @LastEditors: don
 * @LastEditTime: 2021-02-07 11:10:08
 * @Description: 
 */
const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = "just do it";
  }
}

module.exports = HomeController;