import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import './assets/iconfont/iconfont.css'

import './style.scss'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import 'swiper/swiper-bundle.css'

import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* {  default global options } */)

// import Swiper, { Pagination, Autoplay } from "swiper";
// Swiper.use([Pagination, Autoplay]);

import Card from './components/Card'
Vue.component('m-card', Card)

import ListCard from './components/ListCard.vue'
Vue.component('m-list-card', ListCard)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
