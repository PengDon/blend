import * as userService from '../service/user';

export default {

  namespace: 'user',

  state: {
    userList: [],
  },

  effects: {
    *queryList({ _ }, { call, put }) {
      const rsp = yield call(userService.queryList);
      console.log('--------queryList-----------',rsp.data.data);
      yield put({ type: 'saveList', payload: { userList: rsp.data.data } });
    },
    
  },

  reducers: {
    saveList(state, { payload: { userList } }) {
      return {
        ...state,
        userList,
      }
    },
  },
};
