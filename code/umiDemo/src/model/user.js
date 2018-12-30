import * as userService from '../service/user';

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
    *login(payload,{call}){
      const res = yield call(userService.login,payload);
      if(res.data.success){
         // 登录成功后，跳转到首页
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
