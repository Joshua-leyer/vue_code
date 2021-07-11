import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
  
import { Button, Message } from 'element-ui'


// Vue.use(ElementUI) 

Vue.component(Button.name, Button)
Vue.prototype.$message = Message


Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
