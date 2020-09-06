## Computed

Quando precisamos modificar ou alterar algum dado usando JavaScript, 
podemos adotar uma propriedade dentro do `computed`.

```js
<span> {{ preco - desconto }} </span>

<span> {{ total }} </span>

const vm = new Vue({
  data: {
    preco: 99.99,
    desconto: 10.00',
  },
  computed: {
    total() {
      return 'R$' + (this.preco -  this.desconto);
    },
  },
});

```



```js
<ul v-for="car in isColorBlack" v-key="car.id">
  <li> {{car.model}} - {{car.model}} </li>
</ul>


const vm = new Vue({
  data: {
    carros: [
      { id: 001, model: 'fusca', cor: 'black'},
      { id: 002, model: 'fusca', cor: 'white'},
      { id: 003, model: 'fusca', cor: 'blue'},
      { id: 004, model: 'fusca', cor: 'red'},
      { id: 005, model: 'gol', cor: 'blue'}, 
      { id: 006, model: 'gol', cor: 'white'}, 
      { id: 007, model: 'gol', cor: 'gray'}, 
      { id: 008, model: 'gol', cor: 'red'}
    ],
  },
  computed: {
    isColorBlack() {
      const filterCars = this.carros.filter(({cor}) => {
        cor === 'black;
      });
      return filterCars;
    },
  },
});

```

## Watch



```js
<input 
  type="text"
  placeholder="cep" 
  maxlength="8"
  v-model="cep">

<span> {{cep}} </span>

<p> {{endereco}} </p>

const vm = new Vue({
  data: {
    cep: '',
    endereco: {},
  },
  watch: {
    cep(zipcode) { // observando nossa propriedade
    if(valor.length === 8) {
      const url = `http://viacep.com.br/ws/${zipcode}/json/`;
      fetch(url)
      .then((response) => {
        response.json()
      })
      .then((response) => {
        this.endereco = response
      });
    }
    
      console.log(this.cep);
    }
  },
});

```



## Exercício

1.  Faça uma computed que aglutine nome e sobrenome


```js
<span> {{ name }} {{ lastName }} </span>

<span> {{ concatName }} </span>

const vm = new Vue({
  data: {
    name: 'James',
    lastName: 'Bond',
  },
  computed: {
    concatName() {
      return `${this.name} ${this.lastName}`;
    },
  },
});


```

2. Consuma a API `https://restcountries.eu/rest/v2/all` para puxar as capitais dos países.
Adote um campo de Select onde o usuário pode selecionar o país, com uma função `watch` quando 
o usuário selecionar o país ele altera a capital de acordo com o país selecionado.




```js
<select name="paises" id="paises" v-model="countrySelected">
  <option v-for="pais in paises" :value="pais.name">
    {{pais.name}}
  </option>
</select>

<h1> {{capital.capital}} </h1>


const vm = new Vue({
  data: {
   paises: {},
   capital: '',
   countrySelected: '',
  },
  watch:{
    countrySelected(value) {
      this.capital = this.paises.find((pais) => {
        pais.name = value;
      })
    },
  },
  methods: {
    getCountries() {
      const url = `https://restcountries.eu/rest/v2/all`;
      fetch(url)
      .then((response) => {
        response.json()
      })
      .then((response) => {
        this.paises = response;
      });
    }
    }
  }
});


```

## two-way-databind & one-way-databind

Por padrão todo conteudo do Vue.js é one-way, isso significa que a mudança do JavaScript 
criam mudanças no DOM. Já no two-way, tantas mudanças no DOM como no JavaScript, 
mudam o conteúdo.



