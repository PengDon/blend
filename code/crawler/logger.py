'''
@Author: don
@Date: 2020-06-17 11:27:48
@LastEditTime: 2020-06-19 12:23:30
@Description: 日志工具类
'''
import time
from loguru import logger
from pathlib import Path

# project_path = Path.cwd().parent
project_path = Path.cwd()
log_path = Path(project_path, "logs")
t = time.strftime("%Y_%m_%d")

class Loggings(object):
    __instance = None
    logger.add(f"{log_path}/operation_log_{t}.log",format="{time:YYYY-MM-DD HH:mm:ss} | {level} | {message}", rotation="50MB", encoding="utf-8", enqueue=True,
               retention="10 days")

    def __new__(cls, *args, **kwargs):
        if not cls.__instance:
            cls.__instance = super(Loggings, cls).__new__(cls, *args, **kwargs)

        return cls.__instance

    def info(self, msg):
        return logger.info(msg)

    def debug(self, msg):
        return logger.debug(msg)

    def warning(self, msg):
        return logger.warning(msg)

    def error(self, msg):
        return logger.error(msg)


# 测试,只有在当前文件直接执行时，才会执行以下代码
# loggings = Loggings()
# if __name__ == '__main__':
#     loggings.info("中文test")
#     loggings.debug("中文test")
#     loggings.warning("中文test")
#     loggings.error("中文test")
        