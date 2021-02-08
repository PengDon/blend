/*
 * @Author: don
 * @Date: 2020-12-22 10:40:48
 * @LastEditors: don
 * @LastEditTime: 2020-12-28 16:08:06
 * @Description:
 */
import { Service, Context } from 'egg';

export default class BaseService extends Service {
  private model: string;

  /**
   *
   * @param model 模型的名字
   * @param app 上下文
   */
  constructor(model: string, app: Context) {
    super(app);
    this.model = model;
  }
  /**
   *
   * @param query 查询条件
   * @param page 当前页码
   * @param per 每页数量
   */
  public async list(query = {}, page = 1, per = 10) { // ts中指定了值，可以不加数据类型
    // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    // console.log(this.app.model);
    // console.log(this.model);
    // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
    const data = await this.app.model[this.model].find(query).limit(per).skip((page - 1) * per)
      .sort({
        _id: -1
      });
    const totalCount = await this.app.model[this.model].countDocuments(query);
    return {
      totalCount,
      pages: Math.ceil(totalCount / per), // 向上取整
      data
    };
  }
  /**
   * 查询一条记录
   * @param id 要查询的id
   */
  public async one(id: string) {
    const data = await this.app.model[this.model].findById(id);
    return data;
  }
  /**
   * 根据id修改一条记录
   * @param id 需要修改的记录id
   * @param data 需要修改的记录内容
   */
  public async update(id: string, data: object) {
    const result = await this.app.model[this.model].findByIdAndUpdate(id, data, { // 如果没有找到该条记录，新增一条
      upsert: true
    });
    return result;
  }
  /**
   * 保存一条记录
   * @param data 要保存的记录
   */
  public async save(data: any) {
    const result = new this.app.model[this.model](data);
    await result.save();
    return result;
  }
  /**
   * 保存多条记录
   * @param models 待保存的数组
   */
  public async saveMany(models: any[]) {
    const result = await this.app.model[this.model].insertMany(models);
    return result;
  }
  /**
   * 根据id删除一条记录
   * @param id 待删除的记录id
   */
  public async deleteOne(id: string) {
    const result = await this.app.model[this.model].findByIdAndDelete(id);
    return result;
  }
  /**
   * 根据id数组删除多条记录
   * @param ids 待删除的id数组
   */
  public async deleteMany(ids: string[]) {
    const result = await this.app.model[this.model].remove({
      $in: ids
    });
    return result;
  }
}