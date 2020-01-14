/*
 * @Author: don 
 * @Date: 2020-01-06 14:03:01 
 * @Last Modified by: don
 * @Last Modified time: 2020-01-06 14:04:09
 * @Desc: 公用JS封装
 */

 /**
 * 把object对象解析为参数拼接到url后面
 *
 * @param {string} url  https://zzs.com
 * @param {Object} pars {'id':12,'name':'test'}
 * @returns https://zzs.com?id=12&name=test
 */
export const appendPars = (url: string, pars: any) =>{
  if (pars == null || pars == "") {
      return url;
  }
  let parArray = [];
  for (let parName in pars) {
      let par = pars[parName];
      parArray.push(parName + "=" + par);
  }
  if (url.indexOf("?") > 0) {
      url += "&"
  }
  else {
      url += "?"
  }
  return url += parArray.join("&");
};


/**
 * 根据name获取url参数对应的value值
 *
 * @param {*} name
 * @returns
 */
export const getQueryString = (name:string) =>{
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
        r = (window.location.hash + window.location.search).replace(/^[^\?]*\?/, '').match(reg),
        qs = '';
    if (r != null) {
        qs = decodeURIComponent(r[2]);
    }
    return qs;
}