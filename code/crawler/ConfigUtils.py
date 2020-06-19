'''
@Author: don
@Date: 2020-06-17 16:16:00
@LastEditTime: 2020-06-17 17:22:56
@Description: 配置文件工具类
参考：https://docs.python.org/3/library/configparser.html
'''
import configparser
from logger import Loggings
loggings = Loggings()

class ConfigUtils(object):
     def __init__(self,fileName):
         super(ConfigUtils, self).__init__()
         try:
             loggings.info('配置读取中...')
             self.config = configparser.ConfigParser()
             self.config.read(fileName)
         except IOError as e:
             loggings.error('读取配置出错')
             loggings.error(traceback.print_exc())




# # 测试
# cu = ConfigUtils('ini.cfg')
# # 打印所有的section  
# loggings.info(cu.config.sections())

# # 删除指定section  
# # cu.config.remove_section('local_mysql') 

# #打印对应section的所有items键值对
# loggings.info(cu.config.items('local_mysql'))

# #写配置文件  
# #增加新的section  
# cu.config.add_section('local_mysql')  
# #写入指定section增加新option和值   
# cu.config.set("local_mysql", "passwd", "new-value")  
# cu.config.set("local_mysql", "charset", "new_value")   
# cu.config.set("local_mysql", "db", "new-value")  
# cu.config.set("local_mysql", "port", "new_value")   
# cu.config.set("local_mysql", "host", "new_value")   
# cu.config.set("local_mysql", "user", "new_value")   
# cu.config.set("local_mysql", "connect_timeout", "new_value")   
# #写回配置文件  
# cu.config.write(open("test.cfg", "w")) 
