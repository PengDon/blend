'''
@Author: don
@Date: 2020-06-17 10:52:30
@LastEditTime: 2020-06-24 11:19:05
@Description: 爬虫入口文件
'''
# import requests
# from logger import Loggings
# loggings = Loggings()

import uvicorn

async def app(scope, receive, send):
    assert scope['type'] == 'http'
    await send({
        'type': 'http.response.start',
        'status': 200,
        'headers': [
            [b'content-type', b'text/plain'],
        ]
    })
    await send({
        'type': 'http.response.body',
        'body': b'Hello, world!',
    })

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=5000, log_level="info")


