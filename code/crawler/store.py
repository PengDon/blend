'''
@Author: don
@Date: 2020-06-18 14:31:42
@LastEditTime: 2020-06-18 16:20:06
@Description: 小说抓取
'''

import requests
import time
from bs4 import BeautifulSoup
from tqdm import tqdm
from logger import Loggings
loggings = Loggings()

def get_content(target):
    req = requests.get(url = target)
    req.encoding = 'utf-8'
    html = req.text
    bf = BeautifulSoup(html, 'lxml')
    # 根据小说详情页具体情况修改
    texts = bf.find('div', class_="content")
    # texts = bf.find('div', id='content')
    # 提取所有文字，然后再使用 strip 方法去掉回车，最后使用 split 方法根据 \xa0 切分数据
    content = texts.text.strip().split('\xa0'*4)
    return content

if __name__ == '__main__':
  
    # loggings.info('纵横中文小说下载准备中...')
    # server = 'http://www.zongheng.com/'
    # book_name = '天泉圣子.txt'
    # target = 'http://book.zongheng.com/showchapter/899865.html'
    # req = requests.get(url = target)
    # req.encoding = 'utf-8'
    # html = req.text
    # loggings.info('获取到内容')
    # chapter_bs = BeautifulSoup(html,'lxml')
    # chapters = chapter_bs.find('ul', class_='chapter-list')
    # chapters = chapters.find_all('a')
    # loggings.info('开始准备下载')
    # with tqdm(chapters) as t:
    #   for chapter in t:
    #     chapter_name = chapter.string
    #     url = chapter.get('href')
    #     content = get_content(url)
    #     with open(book_name,'a',encoding='utf-8') as f:
    #       f.write(chapter_name)
    #       f.write('\n')
    #       f.write('\n'.join(content))
    #       f.write('\n')


    # loggings.info('新笔趣阁小说下载准备中...')
    # server = 'https://www.xsbiquge.com'
    # book_name = '宗主的都市奇妙生活.txt'
    # target = 'https://www.xsbiquge.com/92_92942/'
    # req = requests.get(url = target)
    # req.encoding = 'utf-8'
    # html = req.text
    # loggings.info('获取到内容')
    # chapter_bs = BeautifulSoup(html, 'lxml')
    # chapters = chapter_bs.find('div', id='list')
    # chapters = chapters.find_all('a')
    # loggings.info('开始准备下载')
    # with tqdm(chapters) as t:
    #   for chapter in t:
    #       chapter_name = chapter.string
    #       url = server + chapter.get('href')
    #       content = get_content(url)
    #       with open(book_name, 'a', encoding='utf-8') as f:
    #           f.write(chapter_name)
    #           f.write('\n')
    #           f.write('\n'.join(content))
    #           f.write('\n')
