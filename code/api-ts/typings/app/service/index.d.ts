// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportProduct from '../../../app/service/product';
import ExportProject from '../../../app/service/project';
import ExportTask from '../../../app/service/task';
import ExportTest from '../../../app/service/test';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    product: AutoInstanceType<typeof ExportProduct>;
    project: AutoInstanceType<typeof ExportProject>;
    task: AutoInstanceType<typeof ExportTask>;
    test: AutoInstanceType<typeof ExportTest>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
