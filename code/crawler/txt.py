'''
@Author: don
@Date: 2020-06-18 14:30:38
@LastEditTime: 2020-06-18 14:31:07
@Description: 抓取内容存取到指定txt文件
'''
import requests
from bs4 import BeautifulSoup
from logger import Loggings
loggings = Loggings()

file = r"sina.txt"
# 获取目标网页
res = requests.get('http://news.sina.com.cn/china/')
# 抓取网页出现乱码
res.encoding = 'utf-8'
# 爬取网页
soup = BeautifulSoup(res.text,'html.parser')
loggings.info('内容获取中...')
# open(file, mode='r', buffering=-1, encoding=None, errors=None, newline=None, closefd=True, opener=None)
fp = open(file,'w',encoding='utf-8')
loggings.info('准备写入到本地文件')
loan_count = 0
try:
  with soup.select('.main-text a') as t:
    for news in t:
      loan_count += 1
      fp.write(news.text + "\n")
except:
   raise
fp.close()
loggings.info('写入完成,共写入%d条数据……' % loan_count)