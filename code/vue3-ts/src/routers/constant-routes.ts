/**
 * @author: don 
 * @date: 2019-10-14 15:40:43 
 * @last Modified by:   don 
 * @last Modified time: 2019-10-14 15:40:43 
 * @describe: 定义一个方法将modules中的文件全部导入进来
 * 
 */

const routerList: any[] = [];
function inportAll(r: any) {
  r.keys().forEach((key: string) => routerList.push(r(key).default));
}
inportAll(require.context('./modules', true, /\.ts/));

// 用户定义的全部路由
export const constantRoutes = routerList;
