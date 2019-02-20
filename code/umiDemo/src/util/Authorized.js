import RenderAuthorized from '../component/Authorized';
import { getAuthority } from './authority';

console.log('第一行-------------------------');
let Authorized = RenderAuthorized(getAuthority()); // eslint-disable-line
console.log('第二行-------------------------');
// Reload the rights component
const reloadAuthorized = () => {
  console.log('权限验证---------222222--------------');
  Authorized = RenderAuthorized(getAuthority());
};
console.log('第三行-------------------------');
export { reloadAuthorized };
export default Authorized;
