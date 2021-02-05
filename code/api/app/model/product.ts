/*
 * @Author: don
 * @Date: 2020-12-22 11:44:39
 * @LastEditors: don
 * @LastEditTime: 2020-12-25 16:32:11
 * @Description:
 */

import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const productSchema = new Schema(
    {
      name: {
        type: String,
        required: true
      },
      description: {
        type: String
      },
      onSale: {
        type: Boolean,
        default: false
      },
      content: {
        type: String,
        default: ''
      },
      quantity: {
        type: Number,
        default: 10
      },
      price: {
        type: Number,
        default: 0.0
      },
      coverImg: {
        type: String
      }
    },
    {
      collection: 'product', // 表名
      timestamps: true
    },
  );
  // mongoose.model('model名称','model数据规范','对应的表名')
  return mongoose.model('product', productSchema);
};
