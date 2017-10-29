import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'

const routes = [
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/signin',
    component: Signin
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
