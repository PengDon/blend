// 创建数据库psm
use psm;
// 用户表（p_user）插入数据
db.p_user.insert([
    {
      userId:1,
      name:'admin',
      password:'admin123',
      roleType:1,
      status:false, // 当前登录状态 ，默认false
      createTime:'2018-12-21 15:13',
      loginTime:''
    },
    {
      userId:2,
      name:'wx20181213',
      password:'abc123',
      roleType:2,
      status:false, // 当前登录状态 ，默认false
      createTime:'2018-12-25 15:13',
      loginTime:''
    },
    {
      userId:3,
      name:'wx20181214',
      password:'abc123',
      roleType:2,
      status:false, // 当前登录状态 ，默认false
      createTime:'2018-12-25 15:13',
      loginTime:''
    }
    ]);
// 删除p_user表数据   
db.p_user.drop();
// 查询p_user表数据
db.p_user.find().pretty();   
// 根据条件查询数据
db.p_user.find({ name: 'admin', password: 'admin123' });
// 单条更新数据
db.p_user.update({'name':'wx20181213'},{$set:{ 'roleType':2}});
db.p_user.update({'name':'wx20181214'},{$set:{ 'roleType':2}});
db.p_user.update({userId:1},{$set:{ status:false}});

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

// 查询用户角色表（p_role）
db.p_role.find();

// 连表查询
db.p_user.aggregate([{
   $lookup:{
     from: "p_role", // 同一个数据库下等待被Join的集合
     localField: "roleType", // 源集合中的match值，如果输入的集合中，某文档没有 localField 这个Key（Field），在处理的过程中，会默认为此文档含有 localField：null的键值对。
     foreignField: "roleId", // 待Join的集合的match值，如果待Join的集合中，文档没有foreignField 值，在处理的过程中，会默认为此文档含有 foreignField：null的键值对。 
     as: "roleType" // 为输出文档的新增值命名。如果输入的集合中已存在该值，则会覆盖掉，
   }
}]);

// 创建左侧菜单表（p_menu）
db.p_menu.insert([
    {
      name:'表单页',
      icon:'none',
      mid:1,
      sort:1
    },
    {
      name:'列表页',
      icon:'none',
      mid:2,
      sort:2
    },
    {
      name:'详情页',
      icon:'none',
      mid:3,
      sort:3
    },
    {
      name:'结果页',
      icon:'none',
      mid:4,
      sort:4
    },
    {
      name:'异常页',
      icon:'none',
      mid:5,
      sort:5
    }
]);

db.p_menu.find();

