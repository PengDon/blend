const routers = [
  {
    name: 'login',
    path: '/login',
    meta: { title: 'login', unauth: true },
    component: () => import('@/views/login'),
  },
  {
    name: 'transition',
    path: '/transition',
    meta: { title: 'transition', unauth: true },
    component: () => import('@/views/transition'),
  }
];

export default routers;
