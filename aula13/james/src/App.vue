<template>
  <div id="app">
    <h1 @click="showRoute">
      Logo
    </h1>
    <!-- Definindo os links das nossas rotas -->
    <nav>
      <router-link to="/"> Home</router-link>
      <router-link to="/about"> Sobre</router-link>
      <router-link to="/cursos">Cursos</router-link>
    </nav>
    <!-- Local onde o componente acionado pelas rotas irá renderizar -->
    <router-view> </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    showRoute() {
      console.log(this.$route);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #235;
  border: 4px solid;
  margin: 20px;
  padding:20px;
}

nav {
  padding: 20px 0;
}

a {
  padding: 10px;
  color: #234;
  text-decoration: none;
}

.router-link-exact-active {
  color: #4b8;
  font-weight: bold;
  text-decoration: line;
}
</style>
