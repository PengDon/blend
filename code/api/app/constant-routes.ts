/*
 * @Author: don
 * @Date: 2020-12-25 17:31:33
 * @LastEditors: don
 * @LastEditTime: 2020-12-25 18:26:28
 * @Description:  定义一个方法将modules中的文件全部导入进来
 */

const routerList: any[] = [];
function inportAll(r: any) {
  r.keys().forEach((key: string) => routerList.push(r(key).default));
}
inportAll(require.context('./routers', true, /\.ts/));

// 用户定义的全部路由
export const constantRoutes = routerList;
