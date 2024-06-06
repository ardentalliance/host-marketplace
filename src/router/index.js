import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/log-in.vue'
import Dashboard from '../components/dashboard-page.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, 
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      props: {}
    }
  ]
})