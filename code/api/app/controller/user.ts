/*
 * @Author: don
 * @Date: 2020-12-25 16:35:54
 * @LastEditors: don
 * @LastEditTime: 2020-12-25 16:36:14
 * @Description: 
 */
import BaseController from '../core/baseController';
import { Context } from 'egg';

export default class UserController extends BaseController {
  constructor(app: Context) {
    super('user', app);
  }
}
