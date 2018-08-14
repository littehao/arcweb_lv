import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  agent:'default'
}

const mutations = {
  setAgent (state, data){
    state.agent = data;
  }
}

const getters = {
  getAgent (state) {
    return state.agent;
  }
}

const store = () => new Vuex.Store({
  state,
  mutations,
  getters
})


export default store