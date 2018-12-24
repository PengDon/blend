# mongodb 操作

## 建库
```
# 创建psm数据库，没有就创建，有就返回
use psm

# 查看当前选择的数据库对不对
db

# 删除现有数据库
db.dropDatabase()
```

## 建集合（表）
```
# 查询创建的集合
show collections

# 创建集合 (用户表)
db.createCollection("p_user",{autoIndexId : true})

# 删除集合
db.p_user.drop();

# 插入数据
db.p_user.insert([
    {
      name:'admin',
      password:'admin123',
      roleType:1,
      createTime:'2018-12-21 15:13',
      loginTime:''
    }
])
```