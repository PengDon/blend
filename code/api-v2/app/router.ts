import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, jwt } = app;

  app.router.prefix(`/api/${app.config.version}`);

  router.get('/', controller.home.index);

  router.post('/login', controller.login.signIn);

  router.get('/users', jwt, controller.users.userList);
};
