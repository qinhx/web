import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
  state:{
    name:"gavin",
    age:12
  },
  getters:{
    getName:state =>state.name,
    getAge:state =>state.age
  },
  mutations:{
    ageChange(state,changeAge){
      state.age = changeAge
    }
  },
  actions:{
    Change({commit},age1){
        commit('ageChange',age1)
      }
  }
})
