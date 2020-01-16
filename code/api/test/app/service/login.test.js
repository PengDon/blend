"use strict";
const { app, mock, assert } = require("egg-mock/bootstrap");

describe('test/app/service/login.test.js', () => {
    describe('signIn(params)', () => {
        it('should Log in with the correct information', async () => {
            const ctx = app.mockContext();
            const res = await ctx.service.login.signIn({
                name: '李四',
                password: 123456
            });
            assert(res)
        });
    });
});