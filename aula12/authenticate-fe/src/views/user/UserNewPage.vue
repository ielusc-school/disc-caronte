<template>
  <div class="container">
    <h1>Cadastro</h1>
    <form @submit.prevent="enviarFormulario">
      <div class="form group">
        <label for="name">Nome</label>
        <input 
          type="text" 
          class="form-control"
          v-model="usuario.nome"
          >
      </div>

      <div class="form group">
        <label for="email">E-mail</label>
        <input 
          type="email" 
          class="form-control"
          v-model="usuario.email"
          >
      </div>

      <div class="form group">
        <label for="password">Senha</label>
        <input
          name="password"
          type="password" 
          class="form-control"
          v-model="usuario.senha"
          >
      </div>

      <button class="btn btn-primary" 
        type="submit">Salvar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserNewPage',
  data() {
    return {
      usuario: {
        nome: '',
        senha: '',
        email: ''
      },
    };
  },
  methods: {
    enviarFormulario() {
      const url = 'auth/register';
      this.$http.post(url, this.usuario)
      .then(response => {
         console.log(response.data);
         
      }).catch(error => {
         console.log(error);
      });
    },
  },
};
</script>