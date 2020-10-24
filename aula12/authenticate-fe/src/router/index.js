import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gerentes from '@/views/manager/ManagerPage.vue';
import NewUsuario from '@/views/user/UserNewPage.vue';
import Login from '@/views/user/UserLoginPage.vue';
import Profile from '@/views/profile/ProfilePage.vue';
import provedor from '@/provedor';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      publica: true
    }
  },
  {
    path: '/gerentes',
    name: 'gerentes',
    component: Gerentes,
  },
  {
    path: '/cadastro',
    name: 'novo.usuario',
    component: NewUsuario,
    meta: {
      publica: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      publica: true
    }
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Profile
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((routeTo, routeFrom, next) => {
  if(!routeTo.meta.publica && !provedor.state.token) {
    return next( { path: '/login' });
  }
  next();
})

export default router
