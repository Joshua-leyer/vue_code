import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'


import './style.css'

Vue.config.productionTip = false


import http from './http'

Vue.prototype.$http = http


// 混入  , !!! 一定要写在 new Vue前面
Vue.mixin({
  methods: {
    getAuthHeaders() {
      return {
        // 没有就返回空值
        Authorization: `Bearer  ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
