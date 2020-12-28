/*
 * @Author: don
 * @Date: 2020-12-28 13:43:38
 * @LastEditors: don
 * @LastEditTime: 2020-12-28 13:47:40
 * @Description: 
 */
import BaseService from '../core/baseService';
import { Context } from 'egg';

export default class TaskService extends BaseService {
  constructor(app: Context) {
    super('Task', app);
  }


}