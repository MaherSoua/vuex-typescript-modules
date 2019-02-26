import { Module } from 'vuex'

export const incremental: Module<any, any> = {
  namespaced: true,
  state: {
    
  },
  getters: {

  },
  mutations: {
    increment (state) {
      console.log(state)
    }
  },
  actions: {
    increment ({ commit, dispatch }) {
      dispatch('increment', 10, { root: true })
    },
    decrement ({ commit, dispatch }) {
      dispatch('decrement', 5, { root: true })
    }
  }
}
