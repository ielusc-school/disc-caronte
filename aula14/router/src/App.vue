<template>
  <div id="app">
    <h2 @click="showRouter">Logo</h2>
    <nav>
      <router-link to="/">Home</router-link>
       <router-link to="/cursos">Cursos</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    showRouter() {
      console.log(this.$route);
      console.log(this.$route.fullPath);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-exact-active {
  color: #84e;
  font-weight: bold;
  text-decoration: none;
}
.router-link-active {
  color: #34495e;
}
a {
  padding: 10px;
}
</style>
