import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'


// axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
//接受请求的时候都会进入这个函数

/*
axios.interceptors.response.use(function(response) {
  let res = response.data;
  if (response.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    //这里要用window去跳, 不能用vue-router , router是挂载到Vue实例里面的, 
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})
*/

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
