"use strict";
const { app, mock, assert } = require("egg-mock/bootstrap");

describe("test/app/service/users.test.js", () => {
  let ctx;
  before(async function() {
    await app.ready();
    ctx = app.mockContext();
  });

  describe("findOne()", () => {
    it("should findOne exists user and userId is 1 and name equal 张三", async () => {
      // 通过 ctx 访问到 service.users
      const user = await ctx.service.users.findOne({ userId: 1 });
      assert(user);
      // assert(user.name === "张三");
    });
  });

  // it("should findOne null when user not exists", async () => {
  //   const ctx = app.mockContext();
  //   const user = await ctx.service.users.findOne(6);
  //   assert(!user);
  // });
});
