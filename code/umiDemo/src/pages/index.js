import Link from 'umi/link';

export default () =>
  <>
    <h1>Index Page</h1>
    <h2>Pages</h2>
    <ul>
    <li><Link to="/user/login">登录</Link></li>
      <li><Link to="/account/center">账户管理</Link></li>
      <li><Link to="/image">图片列表</Link></li>
    </ul>
  </>
