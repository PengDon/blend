import { stringify } from 'qs';
import request from '../util/request';


export async function fakeAccountLogin(params){
  return request('/api/v1/login',{
    method: 'POST',
    body: params,
  });
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/v1/captcha?mobile=${mobile}`);
}

export async function getImageList(params) {
  return request(`/bd/search/acjson?${params}`);
}