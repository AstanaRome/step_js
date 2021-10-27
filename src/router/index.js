import Vue from 'vue'
import VueRouter from 'vue-router'

import FilmsList from '../views/FilmsList'
import ActorsList from '../views/ActorsList'
import ShowFilm from '../views/ShowFilm'
import ShowActor from '../views/ShowActor'




Vue.use(VueRouter)

const routes = [
 
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
  },
  {
    path: '/actors/:id',
    name: 'ShowActor',
    component: ShowActor,
  }

 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
