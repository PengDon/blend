
import * as assert from 'assert';
import { app } from 'egg-mock/bootstrap';

describe('test/app/controller/home.test.ts', () => {
  it('should GET /api/v1/', async () => {
    const result = await app.httpRequest().get('/api/v1/').expect(200);
    assert(result.text === 'hi, egg');
  });
});
