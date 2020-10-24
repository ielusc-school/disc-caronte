import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/site/Home.vue';
import Cursos from '@/views/cursos/Cursos.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: 'process.env.BASE_URL',
  routes: [
    {
      path: '/',
      component: Home
    }, 
    {
      path: '/cursos',
      component: Cursos
    },
    {
      path: '/cursos:curso',
      component: Cursos
    }
  ]
});