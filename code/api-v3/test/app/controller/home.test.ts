
import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
  it('should GET /api/v1/admin/', async () => {
    const result = await app.httpRequest().get('/api/v1/admin/').expect(200);
    assert(result.text === 'hi, egg');
  });
});
