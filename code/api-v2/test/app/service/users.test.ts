import * as assert from 'assert'
import { Context } from 'egg'
import { app } from 'egg-mock/bootstrap'

describe('test/app/service/users.test.ts', () => {
  let ctx: Context

  before(async () => {
    ctx = app.mockContext()
  })

  describe('getUserList()', () => {
    it('should get user list', async () => {
      const res = await ctx.service.users.getUserList()
      assert(res)
    })
  })
})
