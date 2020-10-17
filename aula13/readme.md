## Router

[Documentação Oficial](https://router.vuejs.org/)

SPA
 - Single Page App
 Enviamos apenas um arquivo index.html para o browser.

 - Rotas dividem o app em `páginas`

 - Client-side router 
 Geralmente as rotas são definidas no back-end, server-side router.

Passos:

1. Crie um projeto na configuração default
> vue create james

2. Exclua os arquivos do diretório `components/HelloWorld.vue``
2.1 Remova a chamada do arquivo HelloWorld dentro do arquivo `App.vue`

3. Instale o vue-router 
> npm i vue-router

4. Crie um arquivo `src/router.js`

```js
import Vue from 'vue';
import Router from  'vue-router';

Vue.use(Router);

export default new Router({
});
```

5. Adicione sua instância no main.json
```js
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

6. Criando nossas rotas, acesse o arquivo `src/routes.js`

```js
import Vue from 'vue';
import Router from  'vue-router';
import Home from './views/landingpage/HomePage.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    }

  ],
});

```

6.1 Crie um diretório responsável por lidar com nossa views:
`src/views`;

6.2 Crie um diretório `src/views/landingpage`;
6.3 Crie um arquivo `src/views/landingpage/HomePage.vue`;

```html
<template>
  <div>
    <h1>Hello</h1>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
```

7. Agora precisamos informar no nosso arquivo `App.js`
que existirão rotas que deverão ser renderizadas nele, para isso precisamos conhecer o `router-view`;

O componente `router-view` é utilizado para indicarmos que um componente baseado no Router deverá ser carregado naquela área. O `router-link` é utilizado para criar os links de navegação.

```html
  <!-- Definindo os links das nossas rotas -->
  <router-link to="/"> </router-link>
  <router-link to="/about"> </router-link>

  <!-- Local onde o componente acionado pelas rotas irá renderizar -->
  <router-view> </router-view>
```

8. Se notar agora na url do browser irá aparecer `http://localhost:8080/#/`.  Basicamente o Vue lida com esse `#` como se cada página fosse um id aquela navegação sobre "one-site", entretanto esse não é um padrão bem adotado, para resolvermos esse trâmite iremos usar o `mode: history`
dentro do nosso arquivo `src/routes.js`.

```js

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    }
  ],
});

```

Referência sobre API [History](https://developer.mozilla.org/pt-BR/docs/Web/API/History_API
) 


```js
import Vue from 'vue';
import Router from  'vue-router';
import Home from './views/landingpage/HomePage.vue';
import About from './views/about/AboutPage.vue';

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
    }

  ],
});
```

## Dynamic Route

Podemos passar propriedades em um router para criar ele de forma dinâmica.


## Navigation Guard

Componentes não são recriados quando o parâmetro de um
Dynamic Router é modificado. Para isso existem navigation guards que podem ser utilizadas como hooks.

## Nested Routes

Ë possivel indicar que um router possui router filhos.









