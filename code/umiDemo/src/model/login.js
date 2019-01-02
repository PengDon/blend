import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { fakeAccountLogin, getFakeCaptcha } from '../service/api';
import { setAuthority } from '../utils/authority';
import { getPageQuery } from '../utils/utils';
import { reloadAuthorized } from '../utils/Authorized';

export default {

  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *login(payload,{call, put}){
      const res = yield call(fakeAccountLogin,payload);
      yield put({
        type: 'changeLoginStatus',
        payload: res,
      });
      if(res.data.success){
        reloadAuthorized();
        const urlParams = new URL(window.location.href);
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
    },
    
    *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    },

  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.status,
        type: payload.type,
      };
    },
  },

};
