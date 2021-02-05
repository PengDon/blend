// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportProduct from '../../../app/model/product';
import ExportProject from '../../../app/model/project';
import ExportTask from '../../../app/model/task';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Product: ReturnType<typeof ExportProduct>;
    Project: ReturnType<typeof ExportProject>;
    Task: ReturnType<typeof ExportTask>;
    User: ReturnType<typeof ExportUser>;
  }
}
