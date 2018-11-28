import actions from './actions'
import mutations from './mutation'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		newsList:[],
		newsDetail:{}
		
	},
	getters:{
		getNewsList:res=>res.state.newsList
	},
	mutations,
	actions
})
