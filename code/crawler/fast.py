'''
@Author: don
@Date: 2020-06-24 10:05:05
@LastEditTime: 2020-06-24 10:43:18
@Description: FastApi
uvicorn:https://zhuanlan.zhihu.com/p/115237857
FastAPI:https://www.jianshu.com/nb/39726436
'''
import uvicorn
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"home"}

if __name__ == '__main__':
  uvicorn.run(app=app,host="127.0.0.1",port=80)