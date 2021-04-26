import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topNav: [],
    leftNav: []
  },
  mutations: {
    updateTopNav(state, topNav) {
      state.topNav = topNav;
    },
    updateLeftNav(state, leftNav) {
      state.leftNav = leftNav;
    }
  },
  actions: {},
  modules: {}
})
