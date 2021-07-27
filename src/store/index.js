import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    g_User_Code: 0,
    g_Id: "",
    g_UserData: []
  },
  mutations: {
    setCode(state, p) {
      state.g_User_Code = p;
    },
    setId(state, p) {
      state.g_Id = p;
    },
    setUserData(state, p) {
      state.g_UserData = p;
    }
  },
  actions: {
  },
  modules: {
  }
})
