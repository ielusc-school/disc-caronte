<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="efetuarLogin">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input 
          type="text"
          class="form-control"
          v-model="usuario.email">
      </div>

      <div class="form-group">
        <label for="email">Senha</label>
        <input 
          type="text"
          class="form-control"
          v-model="usuario.senha">
      </div>

      <button 
        type="submit" 
        class="btn btn-primary btn-block">
        Fazer Login
      </button>

      <router-link :to="{ name: 'novo.usuario'}">
        Não possui conta? Crie agora mesmo!
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
      }
    };
  },
  methods: {
    efetuarLogin() {
      const url = 'auth/login';
      this.$http.post(url, this.usuario)
      .then(response => {
        console.log(response.data);
        localStorage.setItem('token', response.data.access_token);
        this.$router.push({ name: 'gerentes'});
      }).catch(error => {
        console.log(error);
      });
    },
  },
};
</script>

<style>

</style>