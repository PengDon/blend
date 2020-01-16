"use strict";

const { app, mock, assert } = require("egg-mock/bootstrap");

describe("test/app/controller/home.test.js", () => {
  describe("index()", () => {
    it("should get /api/v1/home 200", () => {
      // 对 app 发起 `GET /` 请求
      return app
        .httpRequest()
        .get("/api/v1/home")
        .expect(200) // 期望返回 status 200
        .expect("just do it");
    });
  });
});
