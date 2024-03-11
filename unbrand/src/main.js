import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import router from './router'
import store from './store'

Vue.use(VueRouter)
Vue.use(Vuex)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
