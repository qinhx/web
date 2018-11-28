import Vue from 'vue'
import App from './App.vue'
import ElementUI from'element-ui'
import router from './router/router.js'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import axios from 'axios';
Vue.prototype.$axios = axios
axios.defaults.headers.post["Content-type"] = "application/json"

Vue.use(ElementUI)
Vue.use(Router)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
