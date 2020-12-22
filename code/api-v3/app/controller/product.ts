/*
 * @Author: don
 * @Date: 2020-12-22 14:24:35
 * @LastEditors: don
 * @LastEditTime: 2020-12-22 17:34:30
 * @Description:
 */
import { Context } from 'egg'
import BaseController from '../core/baseController'

export default class ProductsController extends BaseController {
  constructor (app: Context) {
    super('product', app);
  }
}