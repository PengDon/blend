/*
 * @Author: don
 * @Date: 2020-12-25 16:35:22
 * @LastEditors: don
 * @LastEditTime: 2020-12-25 16:35:39
 * @Description: 
 */
import BaseService from '../core/baseService';
import { Context } from 'egg';

export default class UserService extends BaseService {
  constructor(app:Context) {
    super('User', app);
  }
}
