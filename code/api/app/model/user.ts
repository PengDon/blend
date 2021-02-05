/*
 * @Author: don
 * @Date: 2020-12-25 16:16:24
 * @LastEditors: don
 * @LastEditTime: 2020-12-25 16:33:28
 * @Description: 
 */
import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const userSchema = new Schema(
    {
      name: {
        type: String,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: Number,
        required: true
      },
      status: {
        type: Number,
        required: true
      },
      createTime: {
        type: String,
        required: true
      },
      uuid: {
        type: String,
        required: true
      }
    },
    {
      collection: 'user', // 表名
      timestamps: true
    },
  );
  return mongoose.model('user', userSchema);
};