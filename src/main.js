import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueRouter from 'vue-router'

import '@/assets/styles/style.scss';
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
