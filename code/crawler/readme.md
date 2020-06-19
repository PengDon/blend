
## 相关说明 
* python3.8
* scrapy1.8.0
* pip20.0.2
* window10专业版64
* vscode

## 常见命令
* scrapy
```sh
# 安装scrapy
pip install scrapy
# 查看版本
scrapy -v
# 升级scrapy
pip install --upgrade scrapy
# 新建项目
scrapy startproject 项目名
# 在工程中新建一个爬虫(spider)
scrapy genspider 爬虫名称 要爬取的网站域名
# 查看爬虫模块
scrapy genspider -l
# 查看项目类有多少爬虫
scrapy list
# view使用浏览器打开网页
scrapy view https://www.baidu.com/
# 在未创建项目场景，直接执行*.py文件，运行单个爬虫
scrapy runspider 文件名.py
# 打印指定url的html代码
scrapy fetch url地址
# 在项目中使用固定的parse函数解析
scrapy parse url
# 调试数据、检测xpath、查看页面源码等
scrapy shell url(html)
# 运行项目
scrapy crawl 爬虫名称
# 检测scrapy是否安装成功
scrapy bench
```

* pip
```sh
# 查看版本
pip -V
# 安装模块
pip install 模块名称
# 卸载模块
pip uninstall 模块名称
# 升级模块
pip install --upgrade 模块名称
# 升级pip
pip install --upgrade pip
# 列出已安装包
pip list
# 显示模块所在目录
pip show -f 模块名称
# 搜索模块
pip search 模块名称
# 查询可升级包
pip list -o
# 下载模块而不安装
pip install -d 模块名称
# 打包
pip wheel 模块名称
# 更换国内pypi镜像
## 国内镜像
阿里：https://mirrors.aliyun.com/pypi/simple
中国科学技术大学：http://pypi.mirrors.ustc.edu.cn/simple/
## 指定单次安装源
pip install -i 模块名 https://mirrors.aliyun.com/pypi/simple
## 指定全局安装源
配置文件路径：%HOME%\pip\pip.ini
文件内容：
[global]
timeout = 6000
  index-url = https://mirrors.aliyun.com/pypi/simple
```

* loguru
```sh
# 安装
pip install loguru

# 输出日志
from loguru import logger
logger.debug("debug 信息")

# 输出到文件
from loguru import logger
logger.add("file_{time}.log")
logger.debug("debug 信息")
logger.info("info 信息")

# 日志规则
from loguru import logger
logger.add("file.log",format="{time} {level} {message}",filter="",level="INFO")
logger.debug("debug 信息")
logger.info("info 信息")

# 日志文件(文件管理方式)
## 文件过大后会重新生成新文件
logger.add("file_1.log",rotation="500 MB")
## 每天12点创建新文件
logger.add("file_2.log",rotation="12:00")
## 文件时间过长就会创建新文件
logger.add("file_3.log",rotation="1 week")
## 一段时间后会清空,可配置"1 week, 3 days"、"2 months"
logger.add("file_4.log",rotation="10 days")
## 保存zip格式,可以配置常见的格式 zip、tar、gz、tar.gz 等
logger.add("file_5.log",compression="zip")

# 格式化字符串输出
logger.info('If you are using Python {}, prefer {feature} of course!', 3.6, feature='f-strings')
n1 = "cool"
n2 = [1, 2, 3]
logger.info(f'If you are using Python {n1}, prefer {n2} of course!')

# 其他参数
## 异步写入
logger.add("file.log",enquene=True)
## 序列化为json
logger.add("file.log",serialize=True)

# 时间格式化
logger.add("file.log",format="{time:YYYY-MM-DD HH:mm:ss} | {level} | {message}")

# 解决中文乱码
logger.add("file.log",encoding="utf-8")
```


## 参考资料
* [python](https://www.python.org/)
* [scrapy模块](https://scrapy.org/)
* [下载依赖包](https://www.lfd.uci.edu/~gohlke/pythonlibs/)
* [下载依赖包2](https://pypi.org/)
* [loguru模块](https://github.com/Delgan/loguru)
* [loguru文档](https://loguru.readthedocs.io/en/stable/index.html)
* [notifiers模块](https://github.com/notifiers/notifiers)
* [notifiers文档](https://notifiers.readthedocs.io/en/latest/)
* [python正则](https://docs.python.org/zh-cn/3/library/re.html)
* [configparser配置解析](https://docs.python.org/3/library/configparser.html)

## 项目说明


