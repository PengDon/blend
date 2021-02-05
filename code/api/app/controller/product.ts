/*
 * @Author: don
 * @Date: 2020-12-22 14:24:35
 * @LastEditors: don
 * @LastEditTime: 2020-12-23 09:49:06
 * @Description:
 */
import BaseController from '../core/baseController';
import { Context } from 'egg';


export default class ProductController extends BaseController {
  constructor(app: Context) {
    super('product', app);
  }
}
