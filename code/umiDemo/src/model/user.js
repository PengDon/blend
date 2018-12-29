import * as userService from '../service/user';

export default {

  namespace: 'user',

  state: {
    userList: []
  },

  effects: {
    *queryList({ _ }, { call, put }) {
      const rsp = yield call(userService.queryList);
      console.log('--------queryList-----------',rsp.data.data);
      yield put({ type: 'saveList', payload: { userList: rsp.data.data } });
    },
    *addUser({ payload }, { call, put }){
      const rsp = yield call(userService.addUser, payload)
      yield put({ type: 'queryList' });
      return rsp;
    },
    *delUser({payload},{call,put}){
      const res = yield call(userService.delUser,payload);
      if(res.data.success){
        yield put({ type: 'queryList' });
      }
      return res;
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
