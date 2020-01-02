const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = "just do it";
  }
}

module.exports = HomeController;
