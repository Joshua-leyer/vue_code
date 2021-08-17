import Vue from 'vue'
import Router from 'vue-router'

import About from './views/About.vue'
import STM32 from './views/STM32'
import List from './components/ListHover'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/about'
      // component: App
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: '/stm32',
      name: 'stm32',
      component: STM32
    },
    {
      path: '/list',
      name: 'list',
      component: List
    }
  ]
})
