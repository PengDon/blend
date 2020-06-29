'''
@Author: don
@Date: 2020-06-28 10:08:16
@LastEditTime: 2020-06-28 15:25:44
@Description: tornado
'''
# import tornado.ioloop
# import tornado.web

# class MainHandler(tornado.web.RequestHandler):
#     def get(self):
#         self.write("Hello, world")

# def make_app():
#     return tornado.web.Application([
#         (r"/", MainHandler),
#     ])

# if __name__ == "__main__":
#     app = make_app()
#     app.listen(8888)
#     tornado.ioloop.IOLoop.current().start()

import tornado.ioloop
import tornado.web
import tornado.options

# 定义处理类型
class MainHandler(tornado.web.RequestHandler):
    # 添加一个处理get请求方式的方法
    def get(self):
        # 添加响应数据
        self.write("简单示例")

if __name__ == "__main__":
    tornado.options.parse_command_line()
    # 创建一个应用对象
    app = tornado.web.Application([(r"/", MainHandler)])
    # 绑定一个监听端口
    app.listen(8888)
    # 启动web程序，开始监听端口的连接
    tornado.ioloop.IOLoop.current().start()