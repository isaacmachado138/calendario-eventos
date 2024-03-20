import { createRouter, createWebHistory } from 'vue-router'
import Login       from '../views/Login.vue'
import MeusEventos from '../views/MeusEventos.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/meus-eventos',
    name: 'meus-eventos',
    component: MeusEventos
    /* // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about"  '../views/AboutView.vue')*/

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router