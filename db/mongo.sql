// 创建数据库psm
use psm;
// 用户表（p_user）插入数据
db.p_user.insert([
    {
      userId:1,
      name:'admin',
      password:'admin123',
      roleType:1,
      createTime:'2018-12-21 15:13',
      loginTime:''
    },
    {
      userId:2,
      name:'wx20181213',
      password:'abc123',
      roleType:2,
      createTime:'2018-12-25 15:13',
      loginTime:''
    },
    {
      userId:3,
      name:'wx20181214',
      password:'abc123',
      roleType:2,
      createTime:'2018-12-25 15:13',
      loginTime:''
    }
    ]);
   
// 查询p_user表数据
db.p_user.find();   
// 根据条件查询数据
db.p_user.find({'name':'wx20181214'});
// 单条更新数据
db.p_user.update({'name':'wx20181213'},{$set:{ 'roleType':2}});
db.p_user.update({'name':'wx20181214'},{$set:{ 'roleType':2}});

// 角色表（p_role)插入数据
db.p_role.insert([
    {
      roleId:1,
      name:'系统管理员'
    },
    {
      roleId:2,
      name:'普通用户'
    }
]);


db.p_role.find();
 