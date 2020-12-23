/*
 * @Author: don
 * @Date: 2020-12-22 18:57:04
 * @LastEditors: don
 * @LastEditTime: 2020-12-23 16:13:20
 * @Description: 
 */
import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
  it('should GET /api/v1/admin/', async () => {
    const result = await app.httpRequest().get('/api/v1/admin/').expect(200);
    console.log(result)
    // assert(result.text === 'hi, egg');
  });
});
