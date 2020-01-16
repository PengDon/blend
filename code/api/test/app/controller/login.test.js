"use strict";

const { app, mock, assert } = require("egg-mock/bootstrap");

describe('test/app/controller/login.test.js', () => {
    it('should post /api/v1/login 200', () => {
        return app
            .httpRequest()
            .post("/api/v1/login")
            .send({
                name: '李四',
                password: 123456
            })
            .expect(200);
    });
});