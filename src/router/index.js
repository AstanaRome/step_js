import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage'
import Films from '../components/Films'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/films',
    name: 'films',
    component: Films,
  }
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
