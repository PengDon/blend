import {getImageList} from '../service/api';
import { routerRedux } from 'dva/router';

export default {

  namespace: 'image',

  state: {
    imageList: []
  },

  effects: {
    *queryList({ payload }, { call, put }) {
      const res = yield call(getImageList,payload);
      console.log('--------imageList-----------',res.data);
      yield put({ type: 'saveList', payload: { imageList: res.data } });
    },
  },

  reducers: {
    saveList(state, { payload: { imageList } }) {
      return {
        ...state,
        imageList,
      }
    },
  },
};
