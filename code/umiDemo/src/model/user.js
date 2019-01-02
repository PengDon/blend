import * as userService from '../service/user';
import { routerRedux } from 'dva/router';
import { getPageQuery } from '../util/utils';

export default {

  namespace: 'user',

  state: {
    userList: []
  },

  effects: {
    *queryList({ _ }, { call, put }) {
      const res = yield call(userService.queryList);
      console.log('--------queryList-----------',res.data.data);
      yield put({ type: 'saveList', payload: { userList: res.data.data } });
    },
    *addUser({ payload }, { call, put }){
      const res = yield call(userService.addUser, payload)
      yield put({ type: 'queryList' });
      return res;
    },
    *delUser({payload},{call,put}){
      const res = yield call(userService.delUser,payload);
      if(res.data.success){
        yield put({ type: 'queryList' });
      }
      return res;
    },
    *login(payload,{call, put}){
      const res = yield call(userService.login,payload);
      if(res.data.success){
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.match(/^\/.*#/)) {
              redirect = redirect.substr(redirect.indexOf('#') + 1);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }
         // 登录成功后，跳转到首页
         yield put(routerRedux.replace(redirect || '/'));
      }
    }

  },

  reducers: {
    saveList(state, { payload: { userList } }) {
      return {
        ...state,
        userList,
      }
    },
    hanldDelUser(state,{payload:{index}}){
      let userList = Object.assign([],state.userList);
      userList.splice(index,1);
      return {
        ...state,
        userList
      }
    }

  },
};
