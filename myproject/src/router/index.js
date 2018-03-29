import Vue from 'vue'
import Router from 'vue-router'
import My from '@/components/My'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/My',
      name: 'My',
      component: My
    }
  ]
})
