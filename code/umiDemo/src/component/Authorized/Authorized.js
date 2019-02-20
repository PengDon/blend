import CheckPermissions from './CheckPermissions';

console.log('检查封装封装-------------------------');

const Authorized = ({ children, authority, noMatch = null }) => {
  const childrenRender = typeof children === 'undefined' ? null : children;
  return CheckPermissions(authority, childrenRender, noMatch);
};

export default Authorized;
