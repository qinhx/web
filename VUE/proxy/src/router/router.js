import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home.vue'


Vue.use(Router)

const routes = [
	{name:"home",path:'/', component:home}
]
export default new Router({
	routes
})