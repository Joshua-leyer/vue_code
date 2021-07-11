import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ListArticle from '../views/ListArticle'
import CreateArticle from '../views/CreateArticle'
import EditArticle from '../views/EditArticle'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'Home',
    // component: Home
    redirect: '/articles/index'
  },
  {
    path: '/articles/create',
    name: 'ArticlesCreate',
    component: CreateArticle
  },
  {
    path: '/articles/index',
    name: 'ArticlesList',
    component: ListArticle
  },
  {
    path: '/articles/edit/:id',
    name: 'EditArticle',
    component: EditArticle,
    props: true
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

export default router
