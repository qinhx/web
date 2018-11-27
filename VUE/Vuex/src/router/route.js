import Vue from 'vue'
import VueRouter from 'vue-router'
import view from '../pages/view1'
import home from '../pages/home'
Vue.use(VueRouter);
const routes = [

  {name:'home',path:'/',component:home,children:[
      {name:'view1',path:'/view',component:view}
    ]}
];
export default new VueRouter({
  mode:'history',
  routes
})
