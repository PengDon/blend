// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportProduct from '../../../app/model/product';

declare module 'egg' {
  interface IModel {
    Product: ReturnType<typeof ExportProduct>;
  }
}
