"use strict";
const { app, assert } = require("egg-mock/bootstrap");

describe("test/app/extend/helper.test.js", () => {
    it("should formatTime(1579154539350) === '2020-01-16 14:02:19'", () => {
        const ctx = app.mockContext();
        assert(ctx.helper.formatTime(1579154539350) === '2020-01-16 14:02:19');
    })

    it("should success()", () => {
        const ctx = app.mockContext();
        // 该方法没有返回值，故先执行，然后查看ctx.body判断是否有效
        ctx.helper.success(ctx, null, 'xxxx');
        assert(ctx.body);
        assert(ctx.body = { code: 1, data: null, msg: 'xxxx' })
    })

})