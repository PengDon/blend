'''
@Author: don
@Date: 2020-06-17 10:47:26
@LastEditTime: 2020-06-18 10:31:09
@Description: mysql数据库工具类
'''
import MySQLdb
from logger import Loggings
from ConfigUtils import ConfigUtils
loggings = Loggings()
cu = ConfigUtils('ini.cfg')

class DB:
    def __init__(self):
      super(DB, self).__init__()
      loggings.info(cu.config.sections())
      loggings.info(cu.config.get("host"))
      self.conn = None
      self.cursor = None

    # 开启连接
    def connect(self):
        try:
          loggings.info("数据库连接中...")
          # 写法一
          # self.conn = MySQLdb.Connect("localhost","root","usbw","egg")
          # 写法二
          self.conn = MySQLdb.connect(host="localhost", user="root", passwd="usbw", db="egg", charset="utf8")
          loggings.info("数据库连接已开启")
        except Exception as err:
          loggings.error("数据库连接失败")
          loggings.error(Exception)
          loggings.error(err)
        
        self.cursor = self.conn.cursor()
      
    # 关闭连接
    def close(self):
        # 如果连接已打开，则关闭；否则没有操作
        if self.conn and self.cursor:
          loggings.info("关闭数据库连接")
          self.cursor.close()
          self.conn.close()
        return True

    # 插入单条数据
    def insert(self, sql, param):
      self.connect()
      loggings.info(f'执行的sql代码：{sql}')
      loggings.info(f'相关参数：{param}')
      try:
        self.cursor.execute(sql, param)
        self.conn.commit()
      except Exception as err:
        loggings.error("数据插入失败")
        loggings.error(Exception)
        loggings.error(err)
        return False
      return True
      self.close()
    
    # 插入多条数据
    def insertMuti(self, sql, param):
      self.connect()
      loggings.info(f'执行的sql代码：{sql}')
      loggings.info(f'相关参数：{param}')
      try:
        self.cursor.executemany(sql, param)
        self.conn.commit()
      except Exception as err:
        loggings.error("数据插入失败")
        loggings.error(Exception)
        loggings.error(err)
        return False
      return True
      self.close()

    # 查询所有
    def queryAll(self, sql):
      self.connect()
      loggings.info(f'执行的sql代码：{sql}')
      try:
          self.cursor.execute(sql)
          return self.cursor.fetchall()
      except Exception as err:
          loggings.error("查询失败")
          loggings.error(Exception)
          loggings.error(err)
      self.close()
    
    # 查询一条数据
    def queryOne(self, sql):
      self.connect()
      loggings.info(f'执行的sql代码：{sql}')
      try:
         self.cursor.execute(sql)
         return self.cursor.fetchone()
      except Exception as err:
         loggings.error("查询失败")
         loggings.error(Exception)
         loggings.error(err)
      self.close()
    
    # 更新数据
    def update(self, sql, param):
      self.connect()
      loggings.info(f'执行的sql代码：{sql}')
      loggings.info(f'相关参数：{param}')
      try:
        self.cursor.execute(sql, param)
      except Exception as err:
        loggings.error("数据更新失败")
        loggings.error(Exception)
        loggings.error(err)
        return False
      return True
      self.close()
    
    # 删除数据
    def delete(self, sql, param):
      self.connect()
      loggings.info(f'执行的sql代码：{sql}')
      loggings.info(f'相关参数：{param}')
      try:
        self.cursor.execute(sql, param)
      except Exception as err:
        loggings.error("数据删除失败")
        loggings.error(Exception)
        loggings.error(err)
        return False
      return True
      self.close()


# # 测试,只有在当前文件直接执行时，才会执行以下代码
db = DB()
# if __name__ == '__main__':
#   rst = db.queryAll('select * from users')
#   loggings.info(f'查詢結果：{rst}')
  # db.delete('delete from users where name=%s', ('李逵'))
  # db.insert('insert into users(name,roleId) values (%s,%s)', ('李逵', 3))

