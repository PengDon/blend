import Link from 'umi/link';

export default () =>
  <>
    <h1>Index Page</h1>
    <h2>Pages</h2>
    <ul>
    <li><Link to="/user/login">登录</Link></li>
      <li><Link to="/user/list">用户列表</Link></li>
    </ul>
  </>
