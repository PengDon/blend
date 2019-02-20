import Authorized from './Authorized';
import AuthorizedRoute from './AuthorizedRoute';
import Secured from './Secured';
import check from './CheckPermissions';
import renderAuthorize from './renderAuthorize';

console.log('开始权限检查-------------------------');
Authorized.Secured = Secured;
Authorized.AuthorizedRoute = AuthorizedRoute;
Authorized.check = check;
console.log('结束权限检查-------------------------');

export default renderAuthorize(Authorized);
