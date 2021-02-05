/*
 * @Author: don
 * @Date: 2020-12-24 18:26:58
 * @LastEditors: don
 * @LastEditTime: 2020-12-24 18:48:21
 * @Description: 
 */

import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/project.test.js', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('project list length > 0', async () => {
    const result = await ctx.service.project.list();
    assert(result.data.length > 0);
  });

  
});
