const routers = [
  {
    name: "user",
    path: "/users",
    meta: { title: "User", unauth: true },
    component: () => import("@/views/user")
  }
];

export default routers;
