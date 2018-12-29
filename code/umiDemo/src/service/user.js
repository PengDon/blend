import request from '../util/request';

/**
 * method:get
 * return array
 */
export function queryList() {
  return request('/api/v1/getUserList');
}

export function addUser(data){
  return request('/api/v1/addUser',{
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  });
}