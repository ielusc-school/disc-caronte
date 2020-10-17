import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gerentes from '@/views/manager/ManagerPage.vue';
import NewUsuario from '@/views/user/UserNewPage.vue';
import Login from '@/views/user/UserLoginPage.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes
  },
  {
    path: '/cadastro',
    name: 'novo.usuario',
    component: NewUsuario
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router
