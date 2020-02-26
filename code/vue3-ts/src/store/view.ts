import { MutationTree, ActionTree } from 'vuex'

export interface IViewState {
  sidebarOpened: boolean
  title: string
  menuList: Array<{ [propsName: string]: any }>
}

export interface RootState {
  viewStore: IViewState
}

export enum TYPES {
  OPEN_SIDEBAR = 'OPEN_SIDEBAR', // 打开侧边栏
  CLOSE_SIDEBAR = 'CLOSE_SIDEBAR', // 关闭侧边栏
  SET_TITLE = 'SET_TITLE',
  SET_MENU = 'SET_MENU' // 设置菜单
}

const state: IViewState = {
  sidebarOpened: true,
  title: '主页',
  menuList: []
}

const getters = {
  // tslint:disable-next-line:no-shadowed-variable
  sidebarOpened: (state: IViewState) => state.sidebarOpened
}

const mutations: MutationTree<IViewState> = {
  [TYPES.OPEN_SIDEBAR](s: IViewState) {
    s.sidebarOpened = true
  },
  [TYPES.CLOSE_SIDEBAR](s: IViewState) {
    s.sidebarOpened = false
  },
  [TYPES.SET_TITLE](s: IViewState, title: string) {
    s.title = title
  },
  [TYPES.SET_MENU]: (
    s: IViewState,
    payload: Array<{ [propsName: string]: any }>
  ) => {
    s.menuList = payload
  }
}

const actions: ActionTree<IViewState, RootState> = {
  // tslint:disable-next-line:no-shadowed-variable

  toogleSidebar({ state, commit }) {
    state.sidebarOpened
      ? commit(TYPES.CLOSE_SIDEBAR)
      : commit(TYPES.OPEN_SIDEBAR)
  },

  setTitle({ commit }, params) {
    commit(TYPES.SET_TITLE, params)
  }
}

export const viewStore = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
