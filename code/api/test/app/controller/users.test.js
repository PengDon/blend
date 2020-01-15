"use strict";

const { app, mock, assert } = require("egg-mock/bootstrap");

describe("test/app/controller/users.test.js", () => {
  // 查询所有用户
  it("should get /api/v1/users 200", () => {
    return app
      .httpRequest()
      .get("/api/v1/users")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(res => {
        assert(res);
        assert(res.text);
        assert(JSON.parse(res.text));
        assert(JSON.parse(res.text).user.length === 4);
      });
  });

  // 查询指定id的用户
  it("should get /api/v1/users/1 200", () => {
    return app
      .httpRequest()
      .get("/api/v1/users/1")
      .expect(200); // 期望返回 status 200
  });

  // 添加用户
  it("should post /api/v1/users 200", () => {
    return app
      .httpRequest()
      .post("/api/v1/users")
      .send({
        name: "smith",
        roleId: 3
      })
      .expect(200); // 期望返回 status 200
  });

  // 删除用户
  it("should del /api/v1/users/5 200", () => {
    return app
      .httpRequest()
      .del("/api/v1/users/5")
      .expect(200); // 期望返回 status 200
  });

  // 修改指定id的用户信息
  it("should update /api/v1/users 200", async () => {
    await app
      .httpRequest()
      .put("/api/v1/users/1")
      .send({
        name: "John",
        password: "222222",
        status: "1"
      })
      .expect(200); // 期望返回 status 200
  });
});
