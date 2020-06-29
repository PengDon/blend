'''
@Author: don
@Date: 2020-06-22 10:02:14
@LastEditTime: 2020-06-23 10:42:11
@Description: excel文件处理
'''
# xlrd模块读取excel文件
# import xlrd
# from logger import Loggings
# loggings = Loggings()

# book = xlrd.open_workbook('book.xls') # 获取工作簿对象
# loggings.info(f'sheet页名称：{book.sheet_names()}') # 获取所有工作表名称
# sheet = book.sheet_by_index(0) # 根据索引获取工作表对象
# sheet = book.sheet_by_name('Sheet1')
# rows = sheet.nrows # 获取工作表行数
# cols = sheet.ncols # 获取工作表列数
# loggings.info(f'该工作表有%d行，%d列.'  %(rows,cols) ) # 
# loggings.info(f'第三行内容为:{sheet.row_values(2)}') # 获取工作表某一行的内容
# loggings.info('第二列内容为%s,数据类型为%s.'%(sheet.col_values(1),type(sheet.col_values(1)))) # 获取工作表某一列的内容
# loggings.info('第二列内容为%s,数据类型为%s.'%(sheet.col(1),type(sheet.col(1))))
# loggings.info(f'第二行第二列的单元格内容为:{sheet.cell_value(1,1)}')
# loggings.info(f'第三行第二列的单元格内容为:{sheet.cell(2,1).value}')
# loggings.info(f'第五行第三列的单元格内容为:{sheet.row(4)[1].value}') # 获取工作表某一单元格的内容
# loggings.info('第五行第三列的单元格内容为%s,数据类型为%s'%(sheet.col(1)[4].value,type(sheet.col(1)[4].value)))
# loggings.info('第五行第三列的单元格内容为%s,数据类型为%s'%(sheet.col(1)[4],type(sheet.col(1)[4])))

# xlwt写入excel文件，xlwt模块只能写xls文件，不能写xlsx文件(写xlsx程序不会报错，但最后文件无法直接打开，会报错)
# import xlwt
# from logger import Loggings
# loggings = Loggings()

# 逐个写入
# book = xlwt.Workbook() # 创建工作簿
# loggings.info('准备写入中...')
# sheet = book.add_sheet('Sheet1') # 创建工作表
# sheet.write(0,0,'职业') # 向单元格写入内容
# sheet.write(1,0,'技术要求')
# book.save('skills.xls') # 保存工作簿
# loggings.info('可以在目录查看文件内容') 

# 按行写入
# titles = ['年份','季度','营销额','增长']
# years = ['2016','2017','2018','2019']
# quarter = ['一季度','二季度','三季度','四季度']
# gmv = ['2000','3000','2877','3882']
# increase = ['10.20%','34.00%','28.30%','42.00%']
# book = xlwt.Workbook()
# sheet = book.add_sheet('Sheel')
# for i in range(0,len(titles)):
#   sheet.write(0,i,titles[i]) # 按行插入标题
# for i in range(0,len(years)):
#   sheet.write(i+1,0,years[i])
# for i in range(0,len(quarter)):
#   sheet.write(i+1,1,quarter[i])
# for i in range(0,len(gmv)):
#   sheet.write(i+1,2,gmv[i])
# for i in range(0,len(increase)):
#   sheet.write(i+1,3,increase[i])
# book.save('annals.xls')    


# 读取年报
# import xlrd
# from logger import Loggings
# loggings = Loggings()
# annals = xlrd.open_workbook('annals.xls')
# loggings.info(f'所有工作表名称：{annals.sheet_names()}')
# sheet = annals.sheet_by_name('Sheel')
# rows = sheet.nrows
# cols = sheet.ncols
# loggings.info(f'行：{rows}')
# loggings.info(f'列：{cols}')


# import xlwt
# book = xlwt.Workbook()
# sheet = book.add_sheet('Sheel')
# titles = ['类型','书名']
# types = ['java','算法']
# booknames = ['think in java','计算机算法3']
# for i in range(0,len(titles)):
#   sheet.write(0,i,titles[i])
# for i in range(0,len(types)):
#   sheet.write(i+1,0,types[i])
# for i in range(0,len(booknames)):
#   sheet.write(i+1,1,booknames[i])
# book.save('book2.xls')


# 进行自定义字体样式的excel表
# import xlwt
# book = xlwt.Workbook(encoding='utf-8')
# sheet = book.add_sheet('sheet1')
# style = xlwt.XFStyle()  # 初始化样式
# font = xlwt.Font()  # 初始化字体
# font.name = 'Times New Roman'  # 使用字体的名称
# font.bold = True  # 字体加粗
# font.underline = True  # 字体加下划线
# font.italic = True  # 斜体字
# style.font = font  # 设定样式使用的字体
# sheet.write(0,0, 'unformated')  # 不带样式的表单内容
# sheet.write(0,1, 'formated', style)  # 带样式的表单内容
# book.save('boot.xls')


