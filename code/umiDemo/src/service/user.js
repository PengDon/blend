import request from '../util/request';

/**
 * method:get
 * return array
 */
export function queryList() {
  return request('/api/v1/getUserList');
}