/**
 * @author: don
 * @date: 2019-10-14 17:04:39
 * @last Modified by:   don
 * @last Modified time: 2019-10-14 17:04:39
 * @describe:
 *
 */

import axios from "axios";
import { storage } from "@/utils/storage";
import { authToken, reqSource } from "@/config";
import { router } from "@/routers";
// import Qs from 'qs';

// 获取当前环境下的全局变量
const prefix: string = process.env.VUE_APP_prefix;
const iamPrefix: string = process.env.VUE_APP_iamPrefix;

class AxiosRequest {
  public init() {
    axios.defaults.headers.post["Content-Type"] =
      "application/x-www-form-urlencoded;charset=UTF-8";
    axios.defaults.timeout = 60 * 1000;
    axios.defaults.withCredentials = true; // 表示跨域请求时是否需要使用凭证

    // 拦截请求的
    axios.interceptors.request.use(
      (config: { [propsName: string]: any }) => this.request(config),
      (rejection: { data: any }) => this.requestError(rejection)
    );
    // 拦截响应
    axios.interceptors.response.use(
      (res: any) => this.response(res),
      (error: any) => this.responseError(error)
    );
  }

  /**
   * 成功请求的方法
   * @param config
   */
  private request(config: { [propsName: string]: any }) {
    // 配置请求头
    // config.headers['X-Origin'] = `${location.protocol}//${prefix}`;
    // config.headers[authToken] = storage.getItem(authToken);
    // config.headers[reqSource] = 'h5';

    // if (config.method === 'post') {
    //   let data = Qs.parse(config.data)
    //   config.data = Qs.stringify({
    //     ...data
    //   })
    // } else if (config.method === 'get') {
    //   config.params = {
    //     ...config.params
    //   }
    // }

    // 处理请求地址
    const input = config.url;
    if (this.isHttpUrl(input)) {
      config.url = input;
    } else if (this.isIamUrl(input)) {
      config.url = `${location.protocol}//${iamPrefix}${input}`;
    } else {
      // 暂时屏蔽
      // config.url = `${location.protocol}//${prefix}${input}`;
      config.url = `${input}`;
    }
    return config;
  }

  /**
   * 失败请求的方法
   * @param rejection
   */
  private requestError(rejection: { data: any }) {
    return this.useOrigin(rejection)
      ? Promise.reject(rejection)
      : Promise.reject(rejection.data);
  }

  /**
   * 成功响应的方法
   * @param response
   */
  private response(response: any) {
    const code = response.status;
    if ((code >= 200 && code < 300) || code === 304) {
      return this.isPlainRequest(response.config.url) ||
        this.useOrigin(response)
        ? Promise.resolve(response)
        : Promise.resolve(response.data);
    } else {
      return Promise.reject(response);
    }
  }

  /**
   * 响应失败的方法(根据自己的业务逻辑写)
   * @param error
   */
  private responseError(error: any) {
    if (error.response && error.response.status) {
      let $path;
      let $message;
      let $errorInfo;
      if (error.response.data) {
        const { path, message, data } = error.response.data;
        $path = path;
        $message = message;
        $errorInfo = Array.isArray(data.error)
          ? data.error.join(",")
          : data.error;
      }
      switch (error.response.status) {
        case 400:
          console.log(`错误的请求:${$path}-${$errorInfo}`);
          break;
        // 401: 未登录
        // 未登录则跳转登录页面，并携带当前页面的路径
        // 在登录成功后返回当前页面，这一步需要在登录页操作。
        case 401:
          console.log("你没有登录,请先登录");
          router.replace({
            path: "/login",
            query: {
              redirect: router.currentRoute.fullPath
            }
          });
          window.location.reload();
          break;

        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          console.log("登录过期，请重新登录");
          // 清除全部的缓存数据
          window.localStorage.clear();
          window.location.reload();
          // store.commit('loginSuccess', null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: "/login",
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;

        // 404请求不存在
        case 404:
          console.log("网络请求不存在");
          break;
        // 其他错误，直接抛出错误提示
        default:
          console.log("我也不知道是什么错误");
          break;
      }
    }
    return error.response
      ? Promise.reject(error.response)
      : Promise.reject(error);
  }

  // 判断是不是是完整的请求
  private isHttpUrl(input: string) {
    return /^https?:\/\//.test(input);
  }

  // 判断是不是图片请求
  private isIamUrl(input: string) {
    return /^(sso|iam|iam-.*)\//.test(input);
  }

  private isPlainRequest(input: string) {
    return /\.(html?|xml|txt)$/.test(input);
  }

  private useOrigin(res: any) {
    return res.config.useOrigin;
  }
}

export const axiosRequest = new AxiosRequest();
