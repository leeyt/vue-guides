import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'
import store from './store'

Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'

const routes = [
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/signin',
    component: Signin
  },
  {
    path: '/signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user)
    router.push('/dashboard')
  } else {
    router.replace('/signin')
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
