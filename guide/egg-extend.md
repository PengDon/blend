# eggjs中extend框架扩展和调用

参考:[https://eggjs.org/en/basics/extend.html](https://eggjs.org/en/basics/extend.html%29\)



application.js —— this指向：app对象

调用：this.app

context.js —— this指向：ctx对象

调用：this.ctx

request.js —— this指向：ctx.request对象

调用：this.ctx.request

response.js —— this指向：ctx.response对象

调用：this.ctx.response

helper.js —— this指向：ctx.helper对象

调用：this.ctx.helper

**以helper.js为例\(app/extend/helper.js\)**

```
const moment = require('moment')

/**
 * @description: 格式化时间
 * @param {time} time 时间戳
 * @return: 
 * @example: ctx.helper.formatTime(new Date().getTime()) => 2020-01-16 12:48:43
 */
exports.formatTime = time => moment(time).format('YYYY-MM-DD HH:mm:ss')

/**
 * @description: 处理成功响应
 * @param {Object} ctx 上下文
 * @param {any} res 接口返回的结果对象
 * @param {string} msg 消息内容
 * @return: 
 * @example: ctx.helper.success(ctx,res,'描述') => {"code": 200,"data": res,"msg":"描述"}
 */
exports.success = (ctx, data = null, msg = '请求成功')=> {
  ctx.body = {
    code: 1,
    data,
    msg 
  }
  ctx.status = 200
}
```

**在view视图模板中调用helper对象下的**formatTime**\(\)方法**

```
<span> {{ helper.formatTime(date) }} </span>
```

**在controller中调用helper对象下的success\(\)方法**

```
# app/controller/users.js

async findOne() {
    const { ctx, service } = this;
    const id = ctx.params.id;
    const res = await service.users.findOne(id);
    ctx.helper.success(ctx, res);
}
```



