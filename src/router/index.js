import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage'
import FilmsList from '../components/FilmsList'
import ActorsList from '../components/ActorsList'
import ShowFilm from '../components/ShowFilm'

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
    component: FilmsList,
  },
  {
    path: '/films/:id',
    name: 'ShowFilm',
    component: ShowFilm,
  },
  {
    path: '/actors',
    name: 'actors',
    component: ActorsList,
  }

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
