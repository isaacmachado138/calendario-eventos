import { createRouter, createWebHistory } from 'vue-router'
import Login       from '../views/Login.vue'
import MeusEventos from '../views/MeusEventos.vue'
import PrimeiroAcesso from '../views/PrimeiroAcesso.vue'
import authGuard from './authGuard';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/primeiro-acesso',
    name: 'primeiro-acesso',
    component: PrimeiroAcesso
  },
  {
    path: '/home',
    name: 'home',
    component: MeusEventos,
    beforeEnter: authGuard 
  },
  {
    path: '/',
    name: 'home',
    component: MeusEventos,
    beforeEnter: authGuard 
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
