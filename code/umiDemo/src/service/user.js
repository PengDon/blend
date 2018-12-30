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

export function delUser(userId){
  return request('/api/v1/delUser/'+userId);
} 

export function login(user){
  return request('/api/v1/login',{
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(user),
  });
}