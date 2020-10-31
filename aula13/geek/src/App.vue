<template>
  <div id="app">
    <div class="jumbotron">
      <h1 class="display-4">Geek App</h1>
      <p class="lead">Nossa lista de contatinhos...</p>
    </div>
    <div class="container">
      <router-link 
        class="btn btn-info mb-2 mr-2"
        to="/">Home
      </router-link>
      <router-link 
       class="btn btn-info mb-2 mr-2"
       to="/contatos">Contatos
      </router-link>
      <router-link 
       class="btn btn-info mb-2 mr-2"
        to="/prontuarios">Prontuários
      </router-link>

     

      <router-view> </router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
