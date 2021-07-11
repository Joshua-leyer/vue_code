import Vue from 'vue'
import VueRouter from 'vue-router'



import Home from '../pages/home'
import Index from '../pages/index'
import Product from '../pages/product'
import Deatil from '../pages/detail'
import Cart from '../pages/cart'
import Order from '../pages/order'
import OrderConfirm from '../pages/orderConfirm'
import orderList from '../pages/orderList'
import orderPay from '../pages/orderPay'
import Alipay from '../pages/alipay'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    name: 'home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: "index",
        component: Index
      },{
        path: '/product/:id',
        name: 'product',
        component: Product
      },{
        path: '/detail/:id',
        name: 'detail',
        component: Deatil
      }]
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart
  }, {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'order-list',
        component: orderList
      }, {
        path: 'pay',
        name: 'order-pay',
        component: orderPay
      }, {
        path: 'confirm',
        name: 'order-confirm',
        component: OrderConfirm  
      }, {
        path: 'alipy',
        name: 'order-pay',
        component: Alipay
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
