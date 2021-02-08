/*
 * @Author: don
 * @Date: 2020-12-23 09:43:51
 * @LastEditors: don
 * @LastEditTime: 2020-12-23 09:51:42
 * @Description:
 */
import BaseService from '../core/baseService';
import { Context } from 'egg';

export default class ProjectService extends BaseService {
  constructor(app:Context) {
    super('Project', app);
  }
}
