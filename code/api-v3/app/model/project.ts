/*
 * @Author: don
 * @Date: 2020-12-23 09:32:13
 * @LastEditors: don
 * @LastEditTime: 2020-12-23 09:43:24
 * @Description:
 */
import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const projectSchema = new Schema(
    {
      name: {
        type: String,
        required: true
      },
      skill: {
        type: String,
        required: true
      },
      createTime: {
        type: String,
        required: true
      }
    },
    {
      collection: 'project', // 表名
      timestamps: true
    },
  );
  return mongoose.model('project', projectSchema);
};
