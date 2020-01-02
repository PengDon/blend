/**
 * @author: don
 * @date: 2019-10-14 17:11:07
 * @last Modified by:   don
 * @last Modified time: 2019-10-14 17:11:07
 * @describe:
 *
 */
import { $post, $put, $delete, $get } from "@/utils";
import urls from "./urls.json";

/**
 * 智能API
 *
 * @param {string} key  url请求对象对应的key
 * @param {*} params 请求所需的参数[可选参数]
 * @example Api('wxLogin',params) ==> params: { code: string}
 */
export const Api = (key: string, params?: any) => {
  // 获取key对应的url请求对象
  const curUrlObj = urls[key];
  // 根据method字段判断请求类型
  switch (curUrlObj.method) {
    case "post":
      return $post(curUrlObj.url, params);
      break;
    case "put":
      return $put(curUrlObj.url, params);
      break;
    case "delete":
      return $delete(`${curUrlObj.url}?${params}`);
      break;
    default:
      // 'get'
      return params
        ? $get(`${curUrlObj.url}?${params}`)
        : $get(`${curUrlObj.url}`);
      break;
  }
};
