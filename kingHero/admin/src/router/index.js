import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'

import ArticleEdit from '../views/ArticleEdit.vue'
import ArticleList from '../views/ArticleList.vue'

import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'

import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login', name: 'login', component: Login, meta: { isPulic: true }
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      { path: '/categories/create', component: CategoryEdit},
      { path: '/categories/list', component: CategoryList},
      { path: '/categories/edit/:id', component: CategoryEdit, props: true },

      { path: '/items/create', component: ItemEdit},
      { path: '/items/list', component: ItemList },
      { path: '/items/edit/:id', component: ItemEdit, props: true},

      { path: '/heros/create', component: HeroEdit},
      { path: '/heros/list', component: HeroList },
      { path: '/heros/edit/:id', component: HeroEdit, props: true},

      { path: '/articles/create', component: ArticleEdit},
      { path: '/articles/list', component: ArticleList },
      { path: '/articles/edit/:id', component: ArticleEdit, props: true},

      { path: '/ads/create', component: AdEdit},
      { path: '/ads/list', component: AdList },
      { path: '/ads/edit/:id', component: AdEdit, props: true},
      
      { path: '/admin_users/create', component: AdminUserEdit},
      { path: '/admin_users/list', component: AdminUserList },
      { path: '/admin_users/edit/:id', component: AdminUserEdit, props: true},
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})


// 每次切换路由的时候执行的
router.beforeEach((to, from, next) => {
  console.log('===========================')

  if(!to.meta.isPulic && !localStorage.token ) {
    return next('/login')
  }
  console.log('enter path is', to.fullPath)
  
  next()
})


export default router
