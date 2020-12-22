/*
 * @Author: don
 * @Date: 2020-12-22 14:17:11
 * @LastEditors: don
 * @LastEditTime: 2020-12-22 18:24:30
 * @Description:
 */

import BaseService from '../core/baseService';
import { Context } from 'egg';

export default class ProductService extends BaseService {

  constructor(app: Context) {
    super('Product', app);
  }
}
