export default [
  // user
  {
    path: '/user',
    component: '../layout/UserLayout',
    routes: [
      { path: '/user', redirect: './user/login' },
      { path: '/user/login', name: 'login', component: './User/Login' },
    ],
  },
  // app
  {
    path: '/',
    component: '../layout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      {
        path: '/',
        component: './index'
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          { path: '/account/center', component: './User/List' },
        ]
      },
      {
        path: '/image',
        component: './ImageList'
      },
      {
        path: '/position',
        component: './Position'
      },
      {
        path: '/dashboard',
        routes: [
          { path: '/dashboard/login', component: './Dashboard/Login' },
          { path: '/dashboard/analysis', component: './Dashboard/Analysis' },
          { path: '/dashboard/monitor', component: './Dashboard/Monitor' },
          { path: '/dashboard/workplace', component: './Dashboard/Workplace' }
        ]
      },
    ]
  }
];