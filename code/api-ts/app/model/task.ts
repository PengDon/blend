/*
 * @Author: don
 * @Date: 2020-12-28 13:36:36
 * @LastEditors: don
 * @LastEditTime: 2020-12-28 16:22:23
 * @Description: 
 */
import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  // DeprecationWarning: Mongoose: `findOneAndUpdate()` and `findOneAndDelete()` without the `useFindAndModify` option set to false are deprecated. See: https://mongoosejs.com/docs/deprecations.html#findandmodify
  mongoose.set('useFindAndModify', false);
  const Schema = mongoose.Schema;
  const taskSchema = new Schema(
    {
      name: {
        type: String,
        required: true
      },
      userName: {
        type: String,
        required: true
      },
      status: {
        type: String,
        default: '未开始'
      },
      createTime: {
        type: String,
        required: true
      }
    },
    {
      collection: 'task', // 表名
      timestamps: true
    },
  );
  return mongoose.model('task', taskSchema);
};