import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {Router} from './config/routes.js'
Vue.use(VueRouter)

const RouterConfig = {
  // 使用 HTML5 的 History 路由模式
  mode: 'history',
  routes: Router
};
const router = new VueRouter(RouterConfig);
new Vue({
  el: '#app',
  router:router,
  render: h => h(App),
});
