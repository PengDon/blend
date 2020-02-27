import { MutationTree, ActionTree } from 'vuex'

export interface IViewState {
  title: string
}

export interface RootState {
  viewStore: IViewState
}

export enum TYPES {
  SET_TITLE = 'SET_TITLE'
}

const state: IViewState = {
  title: '主页'
}

const getters = {
  // tslint:disable-next-line:no-shadowed-variable
}

const mutations: MutationTree<IViewState> = {
  [TYPES.SET_TITLE](s: IViewState, title: string) {
    s.title = title
  }
}

const actions: ActionTree<IViewState, RootState> = {
  // tslint:disable-next-line:no-shadowed-variable

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
