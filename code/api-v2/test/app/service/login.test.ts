import * as assert from 'assert'
import { Context } from 'egg'
import { app } from 'egg-mock/bootstrap'

describe('test/app/service/login.test.ts', () => {
  let ctx: Context

  before(async () => {
    ctx = app.mockContext()
  })

  describe('signIn()', () => {
    it('should not exsits user', async () => {
      const res = await ctx.service.login.checkName({ name: '李xx' })
      assert(!res)
    })

    it('should exsits user but password is wrong', async () => {
      const res = await ctx.service.login.checkName({ name: '王五' })
      assert(res)
      assert(res.password != '111111')
    })
  })
})
