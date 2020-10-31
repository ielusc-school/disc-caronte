import Vue from 'vue';
import VueRouter from 'vue-router';

// importando nossas rotas

import Home from '@/views/Home.vue';
import Contatos from '@/views/contatos/Contatos.vue';
import Prontuarios from '@/views/medical-records/Prontuarios.vue';
import ContatosDetails from '@/components/contatos/ContatosDetails.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import ContatoEdit from '@/components/contatos/ContatoEdit.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { 
      path: '/',
      component: Home,
    }, 
    { 
      path: '/contatos',
      component: Contatos,
      children: [
        {
          path: ':id', // www.xpto.com.br/contatos/3
          component: ContatosDetails,
        },
        {
          path: ':id/editar', // www.xpto.com.br/contatos/3/editar
          components: {
            default: ContatoEdit,
            'edit-contato': ContatosDetails,
          },
        },
      ],
    }, 
    {
      path: '/prontuarios',
      component: Prontuarios,
      // alias: '/exame',
      alias: ['/james', '/sangue', '/dor']
    }, 
    {
      path: '/prontuarios/:id',
      component: Prontuarios,
    }, 
    {
      path: '*',
      component: PageNotFound,    
    },
  ],
});

