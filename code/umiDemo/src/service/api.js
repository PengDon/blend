import { stringify } from 'qs';
import request from '../utils/request';


export async function fakeAccountLogin(params){
  return request('/api/v1/login',{
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: params,
  });
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/v1/captcha?mobile=${mobile}`);
}