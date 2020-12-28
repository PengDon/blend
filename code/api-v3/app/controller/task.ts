/*
 * @Author: don
 * @Date: 2020-12-28 13:48:00
 * @LastEditors: don
 * @LastEditTime: 2020-12-28 13:49:32
 * @Description:
 */
import BaseController from '../core/baseController';
import { Context } from 'egg';

export default class TaskController extends BaseController {
  constructor(app: Context) {
    super('task', app);
  }
}