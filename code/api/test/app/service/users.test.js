"use strict";
const { app, mock, assert } = require("egg-mock/bootstrap");

describe("test/app/service/users.test.js", () => {
    describe("findAll()", () => {
        // 获取所有用户信息
        it("should get exists users", async () => {
            const ctx = app.mockContext();
            const res = await ctx.service.users.findAll();
            assert(res);
        });
    });

    describe("findOne(id)", () => {
        // 根据存在的id查询用户信息
        it("should get exists user By id", async () => {
            const ctx = app.mockContext();
            const res = await ctx.service.users.findOne(1);
            assert(res);
        });
        // 用不存在的用户id查询
        it("should get null when user not exists", async () => {
            const ctx = app.mockContext();
            const res = await ctx.service.users.findOne(600);
            assert(!res);
        });
    });

    describe("add(params)", () => {
        // 添加一个用户信息
        it("should add users", async () => {
            const ctx = app.mockContext();
            const res = await ctx.service.users.add({
                name: new Date().toISOString().substr(10),
                roleId: 3
            });
            assert(res);
        });
    });

    describe("delete(id)", () => {
        // 删除一个指定id的用户信息
        it("should delete users", async () => {
            const ctx = app.mockContext();
            const res = await ctx.service.users.delete(46);
            assert(res);
        });
    });

    describe("update(id, params)", () => {
        // 修改一个指定id的用户信息
        it("should update users", async () => {
            const ctx = app.mockContext();
            const res = await ctx.service.users.update(45, {
                name: "鹤旋",
                password: "222222",
                status: "1"
            });
            assert(res);
        });
    });

});
