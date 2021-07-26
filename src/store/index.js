import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    g_User_Code: 0,
    g_Id: "",
  },
  mutations: {
    setCode(state, p) {
      state.g_User_Code = p;
    },
    setId(state, p) {
      state.g_Id = p;
    }
  },
  actions: {
  },
  modules: {
  }
})
