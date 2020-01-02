const routers = [
  {
    name: 'home',
    path: '/home',
    meta: { title: 'Home' },
    component: () => import('@/views/home'),
  },
];

export default routers;
