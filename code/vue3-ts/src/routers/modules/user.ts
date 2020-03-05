const routers = [
  {
    name: 'user',
    path: '/users',
    meta: { title: 'User' },
    component: () => import('@/views/user')
  }
]

export default routers
