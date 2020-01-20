// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportLogin from '../../../app/service/login';
import ExportTest from '../../../app/service/test';
import ExportUsers from '../../../app/service/users';

declare module 'egg' {
  interface IService {
    login: ExportLogin;
    test: ExportTest;
    users: ExportUsers;
  }
}
