import Vue from 'vue';
import Vuex from 'vuex';

// tslint:disable-next-line: no-var-requires
import createPersistedState from 'vuex-persistedstate';
import { viewStore } from './view';

Vue.use(Vuex);

const path = require('path');

/********************************自动导包 start********************************/

const file = require.context('./modules', true, /\.ts/);
const modules: { [propsName: string]: any } = {};
file.keys().forEach((key: string) => {
  const name = path.basename(key, '.ts');
  modules[name] = file(key).default || file(key);
});

/********************************自动导包 end********************************/

export default new Vuex.Store({
  modules:{
    viewStore,
    ...modules,
  },
  plugins:[
    // 本地持久化缓存
    createPersistedState({
        storage: window.sessionStorage
    })
  ]
})