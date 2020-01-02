/**
 * @author: don 
 * @date: 2019-10-15 10:58:32 
 * @last Modified by:   don 
 * @last Modified time: 2019-10-15 10:58:32 
 * @describe: 
 * 
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
 *
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