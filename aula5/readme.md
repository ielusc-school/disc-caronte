## Hello Vue
> The Progressive JavaScript Framework
Documentação Oficial > [https://vuejs.org/](https://vuejs.org/guide)

![vue-logo](https://vuejs.org/images/logo.png)

> OBS: Nossas aulas serão pautadas em cima da versão 2.x.

## O que é Vue.js?

Seguindo a documentação oficial:
```
Vue (pronuncia-se /vjuː/, como view, em inglês) é um framework progressivo para a construção de interfaces de usuário. Ao contrário de outros frameworks monolíticos, Vue foi projetado desde sua concepção para ser adotável incrementalmente. A biblioteca principal é focada exclusivamente na camada visual (view layer), sendo fácil adotar e integrar com outras bibliotecas ou projetos existentes. Por outro lado, Vue também é perfeitamente capaz de dar poder a sofisticadas Single-Page Applications quando usado em conjunto com ferramentas modernas e bibliotecas de apoio.
```


## Introdução

O *Vue.js* é um framework progressivo para construção de interfaces do usuário.

- Pode ser adotado de forma incremental
- Fácil integração com bibliotecas de terceiros ou projetos já existentes;
- Pode ser utilizado para criar sofisticadas Multi ou Single Page Applications(MPA e SPA);

> Adendos:

- Acessível: 
  Sabendo HTML, CSS e JavaScript já conseguimos adotar o framework.
- Versátil: 
 Ecossistema incremental de permitir fazer adesão de libs conforme evolução do seu projeto.
- Performático: 
  Virtual DOM extremamente rápido, esforço mínimo para otimizações.
- Manutenível: 
  Manutenibilidade importa, então termos nossos arquivos separados por `componentes` facilita muito a evolução e o crescimento da aplicação.
- Testável:
  Assim como todos os outros frameworks, você tem uma caixa de ferramentas
  para fazer os testes que julgar necessário como unitários e E2E.

## Templates

Aqui vemos um exemplo de como ocorre a interpolação de dados.
Sinta-se á vontade para salvar esse arquivo e fazer o teste.

```html
<html>
  <head> 
    <title>Hello Vue</title>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  </head>
  <body>
  <div id="app">
    <p>{{ hello }}</p>
    <button @click="incrementar()">Adicionar</button>
  </div>  
  <script>
    new Vue({ // instância Vue
      el: '#app', // nosso seletor CSS
      data: {
        hello: 'Hello World with Vue.js', // propriedade 
        cliques: 0 // propriedade
      },
      methods: { // comportamento
        incrementar(event) {
          console.log(event);
          this.cliques++;
        }
      },
    });
  </script>
  </body>
</html>
```
> Events: https://developer.mozilla.org/en-US/docs/Web/Events


## Virtual DOM

Basicamente o virtual dom é um objeto javascript que simula o 
dom atual. Mudanças são primeiramente feita nesse objeto e em seguida uma verificação é feita no DOM, para sincronizar o mesmo.

## Templates e Diretivas


O Vue utiliza uma linguagem de template o famoso double mustache, 
`{{}}` para criarmos o link entre o Javascript e o HTML.

```js
 <p>{{ hello }}</p>

new Vue({ // instância Vue
      el: '#app', // nosso seletor CSS
      data: {
        hello: 'Hello World with Vue.js', // propriedade 
      },
});
```

## Expressões

Podemos utilizar expressões de JavaScript dentro de {{}}

```js
<span> Total: {{ soma +2 }} <s/pan>
<span> Curso: {{ status ? positivo : negativo }} <s/pan>

new Vue({ // instância Vue
      el: '#app', // nosso seletor CSS
      data: {
        soma: '10', // propriedade 
        status: true, // propriedade
      },
});
```

## Diretivas

Elas são são atributos especiais do HTML que são incorporados
a partir do Vue.js que permitem a interação entre código JavaScript e o HTML.

```html
<div v-if="status">
  <p>{{ hello }}</p>
  <input 
    type="text" 
    placeholder="inserir tarefa"
    v-model="taskField">

    <input 
    type="color" 
    placeholder="inserir tarefa"
    v-model="colors">
  <button @click="incrementar">Somar</button>
  Entrar agora mesmo em <a v-bind:href="link"> UOL </a>
</div>

<script>
new Vue({ // instância Vue
      el: '#app', // nosso seletor CSS
      data: {
        colors: '',
        soma: '10', // propriedade 
        status: true, // propriedade
        link: 'https://www.uol.com.br', // propriedade
      },
});
</script>

```

## Instância

Devemos sempre nos atentar que a instância do Vue.js
se trata de uma função construtora, entende-se que toda
função construtora são responsáveis pela construção de objetos.


function setAnimal(animal) {
  this.animal = animal;
  this.el = document.querySelector(animal.el);
  this.data = animal.data;

}



## Desafio

Vamos implementar nesse inicio o layout do processo seletivo do pessoal do `Juntos Somos+`, segue o wireframe do [desafio](https://raw.githubusercontent.com/juntossomosmais/frontend-challenge/master/layout.jpg), mais detalhes sobre o que eles pediram no desafio, pode ser visto nesse [link](https://github.com/juntossomosmais/frontend-challenge).


![](https://raw.githubusercontent.com/juntossomosmais/frontend-challenge/master/layout.jpg)



### Assíncronismo, DOM, Debug  


> Assíncronismo

- CallBack
- Fetch
- Promisses
- Async/Await


>  DOM
- Vue 

> DEBUG

1. Instalar extensão para Debug Vue.Js
> URL
https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=pt-BR
