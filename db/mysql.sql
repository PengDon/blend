
-- 如果存在users表则删除
drop table if exists users;
-- 创建users表
create table users(
	userId int unsigned auto_increment, -- 用户编号,主键，并且自增
	name varchar(25) unique not null, -- 用户姓名(保证学生名字不可以重复)
	password varchar(25) not null default 123456, -- 用户密码
	createDate timestamp not null default current_timestamp, -- 用户创建时间
	status char(1) not null default 1,  -- 用户状态,1正常，0异常，默认为正常状态
	roleId int unsigned not null default 3, -- 用户角色类型，1：超级管理员，2：VIP用户，3：普通用户，默认为普通用户
	primary key (`userId`)
);

-- 插入测试数据到users表
insert into users(name,roleId) values ('张三',3);
insert into users(name,roleId) values ('李四',3);
insert into users(name,roleId) values ('王五',3);
insert into users(name,roleId) values ('佳明',3);
insert into users(name,roleId) values('admin',1);
insert into users(name,roleId) values('bolvs',2);


-- 如果存在roles表则删除
drop table if exists roles;
-- 创建roles表
create table roles(
   roleId int unsigned auto_increment, -- 用户角色ID,主键，并且自增
   roleName varchar(10) not null, -- 用户角色名称
   roleType char(1) unique not null, -- 用户角色类型
	 primary key (`roleId`)
);

-- 插入测试数据到roles表
insert into roles(roleName,roleType) values ('超级管理员',0);
insert into roles(roleName,roleType) values ('VIP用户',1);
insert into roles(roleName,roleType) values ('普通用户',2);

-- 给users表添加外键roleId
-- alter table 需加外键的表 add constraint 外键名(不能重复) foreign key(需加外键表的字段名) referencnes 关联表名(关联字段名);
alter table users add constraint fk_users_roles foreign key (roleId) references roles (roleId);

-- 查询users表用户角色类型
select u.*,r.roleType from users u,roles r where u.roleId = r.roleId; 
-- 查询users表用户具体角色
select u.*,r.roleName from users u,roles r where u.roleId = r.roleId;
-- 查询用户表
select * from users;
-- 查询角色类型表
select * from roles;


