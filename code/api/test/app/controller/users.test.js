"use strict";

const { app, mock, assert } = require("egg-mock/bootstrap");

describe("test/app/controller/users.test.js", async () => {
  // describe("findAll()", () => {
  it("should get /api/v1/users 200", () => {
    // return app
    //   .httpRequest()
    //   .get("/api/v1/users")
    //   .expect(200); // 期望返回 status 200
    const res = app
      .httpRequest()
      .get("/api/v1/users")
      .expect(200);
    assert(res);
  });
  // });

  // describe("findOne()", () => {
  it("should get /api/v1/users/1 200", () => {
    return app
      .httpRequest()
      .get("/api/v1/users/1")
      .expect(200); // 期望返回 status 200
  });
  // });

  // describe("add()", () => {
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
  // });

  // it("should del /api/v1/users/5 200", () => {
  //   return app
  //     .httpRequest()
  //     .del("/api/v1/users/5")
  //     .expect(200); // 期望返回 status 200
  // });

  // it("should put /api/v1/users 200", () => {
  //   return app
  //     .httpRequest()
  //     .put("/api/v1/users")
  //     .send({
  //       userId: 1,
  //       name: "John",
  //       password: "222222",
  //       status: 1
  //     })
  //     .expect(200); // 期望返回 status 200
  // });
});
