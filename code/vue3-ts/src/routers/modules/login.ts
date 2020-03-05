const routers = [
  {
    name: 'login',
    path: '/login',
    meta: { title: 'login', unauth: true },
    component: () => import('@/views/login')
  }
]

export default routers
