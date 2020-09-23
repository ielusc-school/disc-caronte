## Eventos de Teclado | v-on:key

> Podemos adotar modificador diretamente no evento para identificarmos a tecla clicada.

```html
<input @keyup="ativar">
<input @keyup.enter="ativar1">
<input @keyup.esc="ativar2">
<input @keyup.up="ativar3">

<script>
 // ... 
 methods: {
    ativar() {
      console.log('xpto');
    },
    ativar2(event) {
      event.currentTarget.style.color = 'xpto';
      console.log('xpto');
    },
    ativar3(event) {
      event.currentTarget.style.color = 'xpto';
      console.log('xpto');
    },
    ativar4() {
      event.currentTarget.style.color = 'xpto';
      console.log('xpto');
    }
 }
</script>
```

## Eventos de Teclado | v-on:click

```html
<input @click="ativar">
<input @click.alt="ativar1">
<input @click.right="ativar2">
<input @click.middle="ativar3">

<script>
 // ... 
 methods: {
    ativar() {
      console.log('xpto');
    },
    ativar2(event) {
      event.currentTarget.style.color = 'xpto';
      console.log('xpto');
    },
    ativar3(event) {
      event.currentTarget.style.color = 'xpto';
      console.log('xpto');
    },
    ativar4() {
      event.currentTarget.style.color = 'xpto';
      console.log('xpto');
    }
 }
</script>

```
### Ciclo de Vida: Hooks

> Métodos são ativados durante o ciclo de vida de um componente Vue.js.

```html
<!-- -->
<h1>Agora estamos: {{status}}</h1>
<button @click="getUser">Carregar Usuário</button>
<button @click="contador++">{{count}}<button>
<button @click="stop">Parar</button>
{{user}}

<script>
 //...
 data: {
   status: false,
   count: 0,
   user: {},
 },
 beforeCreate() {
   // quando não precisamos de alguma variável dinâmica
   console.log(this.status);
 },
 created() {
   // sempre utilizamos para fazer fetch de dados
   // dom ainda não foi criado nesse hook
   console.log('elemento', this.$el);
   // já temos acesso ao virtual dom
   this.status = true;
   console.log('DOM', this.$el);
 }, 
 beforeMount() {
  console.log('BeforeMount', this.status);
  console.log('DOM no beforeMount', this.$el);
   // já consigo carregar os dados do meu data
 },
 mounted() {
  console.log('DOM no mounted', this.$el);
 },
 beforeUpdate() {
   // dom ainda não foi atualizado
   console.log('teste');
 },
 updated() {
   console.log('updated');
 },
 beforeDestroy() {
   console.log('vai parar');
 },
 destroyed() {
   console.log('Destruiu');
 },
 methods: {
   getUser() {
      const url = 'https://api.github.com/users/cristofersousa';
      fetch(url)
      .then(response => response.json)
      .then(response => {
        this.user = response;
      }).catch(error => console.error(error));
   }
   stop() {
     this.$destroy;
   }
 },

</script>
```


## Filters

```html
  {{name | setMaisucula }}
  {{preco | simboloPreco}}

  <script>
  data() {
    preco: '',
    nome: 'Jaiminho',
  },
  filters: {
    simboloPreco(valor) {
      console.log(valor)
      // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
      return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
      // return valor.toLocaleString('pt-br', { style: 'currency', currency: 'USD' })

      // return `R$ {valor},00`
    }
    setMaisucula(nome) {
      return nome.toUpperCase();
    }
  },
  </script>

```

## Props

Devemos utilizar props para passarmos data de um componente pai para um filho. 
O dado é passado como o valor de um atributo `HTML`

```html
<div>
  <meu-component :propriedade="valor"> </meu-component>
</div>

<script>
import MeuComponent from '..path/MeuComponent.vue';

export default {
  name: 'ProfilePage',
  components: {
    MeuComponent,
  }
  props: {
    propriedade: {
       type: String/Object/Array/Boolean/
    }
     },
  data() {
    return {

    };
  },
};
</script>
```

## Eventos @meu-evento
Quando criamos um componente filho, ocorre mudanças nele e o pai precisa ser avisado sobre isso. É onde entra o nosso famoso `events`
