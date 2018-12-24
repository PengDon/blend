'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'egg + mongodb + react';
  }

  async show() {
    const { ctx } = this;
    ctx.body = `welcome ${ctx.params.name}`;
  }
}

module.exports = HomeController;