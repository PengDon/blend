"use strict";
const { app, mock, assert } = require("egg-mock/bootstrap");
// 登录测试
describe('test/app/service/login.test.js', () => {
    // describe('signIn(params)', () => {
    //     it('should Log in with the correct information', async () => {
    //         const ctx = app.mockContext();
    //         const res = await ctx.service.login.signIn({
    //             name: '李四',
    //             password: 123456
    //         });
    //         assert(res)
    //     });
    // });

    describe('signIn(params)', () => {
        it('should not exsits user',async () => {
            const ctx = app.mockContext();
            const res = await ctx.service.login.signIn({
                name: '李xx',
                password: '111111'
            });
            assert(!res);
        });

        it('should exsits user but password is wrong',async () => {
            const ctx = app.mockContext();
            const res = await ctx.service.login.signIn({
                name: '王五',
                password: '111111'
            });
            assert(res);
            assert(res.password != '111111');
        });

        it('should exsits user and password is correct',async () => {
            const ctx = app.mockContext();
            const res = await ctx.service.login.signIn({
                name: '王五',
                password: '123456'
            });
            assert(res);
            assert(res.password === '123456');
        });
    });
});