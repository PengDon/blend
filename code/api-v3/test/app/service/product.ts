/*
 * @Author: don
 * @Date: 2020-12-22 15:51:10
 * @LastEditors: don
 * @LastEditTime: 2020-12-22 16:48:39
 * @Description:
 */

import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/product.test.js', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('list()', async () => {
    const list = await ctx.service.product.list();
    assert(list.data.length === 2);
  });
});
