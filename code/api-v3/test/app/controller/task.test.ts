/*
 * @Author: don
 * @Date: 2020-12-28 13:57:15
 * @LastEditors: don
 * @LastEditTime: 2020-12-28 16:49:31
 * @Description:
 */

import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/task.test.ts', () => {
  it('should POST /api/v1/admin/task add task', async () => {
    const result = await app.httpRequest().post('/api/v1/admin/task').send({
      name: '梳理业务流程',
      userName: 'don',
      status: '进行中',
      createTime: '20201223'
    }).expect(200);
    assert(result.body.msg === '新增成功');
  });

  let id;
  it('should GET /api/v1/admin/task query all', async () => {
    const result = await app.httpRequest().get('/api/v1/admin/task').expect(200);
    id = result.body.data[0]._id;
    assert(result.body.data.length > 0);
  });

  it(`should PATCH /api/v1/admin/task/:id update task`, async () => {
    const result = await app.httpRequest().patch(`/api/v1/admin/task/${id}`).send({
      name: 'webpack源码解读'
    }).expect(200);
    assert(result.body.msg === '修改成功');
  });

  it(`should GET /api/v1/admin/task/:id query one`, async () => {
    const result = await app.httpRequest().get(`/api/v1/admin/task/${id}`).expect(200);
    assert(result.body.data.name === 'webpack源码解读');
  });

  it(`should DELETE /api/v1/admin/task/:id delete task`, async () => {
    const result = await app.httpRequest().delete(`/api/v1/admin/task/${id}`).expect(200);
    assert(result.body.msg === '删除成功');
  });

});

