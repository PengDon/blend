"use strict";

const { app, mock, assert } = require("egg-mock/bootstrap");

describe('test/app/controller/login.test.js', () => {
    // it('should post /api/v1/login 200', () => {
    //     return app
    //         .httpRequest()
    //         .post("/api/v1/login")
    //         .send({
    //             name: '李四',
    //             password: 123456
    //         })
    //         .expect(200);
    // });

    it('should post /api/v1/login name and password', () => {
        return app
            .httpRequest()
            .post('/api/v1/login')
            .send({
                name: 'xxx',
                password: 'xxxxx'
            })
            .expect(200);
    });

    it('should post /api/v1/login name 200', () => {
        return app
            .httpRequest()
            .post('/api/v1/login')
            .send({
                name: 'xxx'
            })
            .expect(200);
    });

    it('should post /api/v1/login password 200', () => {
        return app
            .httpRequest()
            .post('/api/v1/login')
            .send({
                password: 'xxxxx'
            })
            .expect(200);
    });

    it('should post /api/v1/login not exsits username', () => {
        return app
            .httpRequest()
            .post('/api/v1/login')
            .send({
                name: 'xxx',
                password: 'xxxxx'
            })
            .expect(200)
            .then(res=>{
                assert(res);
                assert(res.text);
                assert(JSON.parse(res.text).msg === '用户不存在!');
            });
    });

    it('should post /api/v1/login exsits username but the password is wrong', () => {
        return app
            .httpRequest()
            .post('/api/v1/login')
            .send({
                name: '王五',
                password: 'xxxxx'
            })
            .expect(200)
            .then(res=>{
                assert(res);
                assert(res.text);
                assert(JSON.parse(res.text).msg === '密码错误！');
            });
    });

    it('should post /api/v1/login exsits username and password is correct', () => {
        return app
            .httpRequest()
            .post('/api/v1/login')
            .send({
                name: '王五',
                password: '123456'
            })
            .expect(200)
            .then(res=>{
                assert(res);
                assert(res.text);
                assert(JSON.parse(res.text).msg === '登录成功!');
            });
    });
});