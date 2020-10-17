import Vue from 'vue';
import Router from  'vue-router';
import Home from './views/landingpage/HomePage.vue';
import About from './views/about/AboutPage.vue';
import Course from './views/course/CoursePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/cursos/',
      component: Course,
      props: true,
      children:  [
        {
          path: ':curso',
          component: Course,
        }
      ],
    },
    {
      path: '/cursos/:curso',
      component: Course,
      props: true,
    }

  ],
});
