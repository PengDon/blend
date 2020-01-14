const { app, mock, assert } = require('egg-mock/bootstrap');
describe('test/controller/users.test.js', () => {
  it('should get a ctx', () => {
    const ctx=app.mockContext({
          session: {
            user:{name:'leo'}
        }
    });
    assert(ctx.method === 'GET');
    assert(ctx.url==='/');
    assert(ctx.session.user.name == 'leo');
  });
});

describe('egg test', () => {
  before(() => console.log('order 1'));
  before(() => console.log('order 2'));
  after(() => console.log('order 6'));
  beforeEach(() => console.log('order 3'));
  afterEach(() => console.log('order 5'));
  it('should worker', () => console.log('order 4'));
});