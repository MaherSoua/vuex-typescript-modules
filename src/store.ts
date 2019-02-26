import Vue from 'vue'
import Vuex from 'vuex'
import { incremental } from './incremental'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    namespaced: true,
    objList: {
      'name': 'Test',
      'firstname': 'First test',
      'birthday': 'old birthday'
    },
    todos: [
      { text: 'Buy Milk' },
      { text: 'Create cake' }
    ],
    counter: 0
  },
  getters: {
    counter: state => state.counter
  },
  mutations: {
    increment (store, value) {
      if (value) {
        store.counter = value
      } else {
        store.counter += 1
      }
      store.objList.birthday = 'Counter is : ' + store.counter
    },
    decrement (store, value) {
      if (value) {
        store.counter = value
      } else {
        store.counter -= 1
      }
      store.objList.birthday = 'Counter is :' + store.counter
    }
  },
  actions: {
    increment ({ commit }, value) {
      commit('increment', value)
    },
    decrement ({ commit }, value) {
      commit('decrement', value)
    }
  },
  modules: {
    incremental
  }
})
