/*
 * @Author: don
 * @Date: 2020-12-23 09:46:26
 * @LastEditors: don
 * @LastEditTime: 2020-12-23 09:48:56
 * @Description:
 */
import BaseController from '../core/baseController';
import { Context } from 'egg';

export default class ProjectController extends BaseController {
  constructor(app: Context) {
    super('project', app);
  }
}

