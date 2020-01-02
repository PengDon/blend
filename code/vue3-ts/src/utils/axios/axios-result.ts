/**
 * @author: don 
 * @date: 2019-10-14 17:04:26 
 * @last Modified by:   don 
 * @last Modified time: 2019-10-14 17:04:26 
 * @describe: 
 * 
 */

/**
 * @param result 返回数据结果
 * @param code 返回的code
 * @param message 返回的消息
 * @param isObj 是否要以对象返回
 */
export const axiosResult = (
  result: any,
  code: number,
  message: string,
  isObj: boolean = false,
): Promise<any> =>
  new Promise((resolve, reject) => {
    if (Object.is(code, 0)) {
      if (result) {
        isObj ? resolve({ result }) : resolve(result);
      } else {
        isObj ? resolve({ message }) : resolve(message);
      }
    } else {
      reject(message);
    }
  });
