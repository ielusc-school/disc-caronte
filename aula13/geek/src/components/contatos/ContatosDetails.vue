<template>
  <div>
    <h3 class="font-weigth-ligth"> Detalhes do meu contato: {{id}} </h3>
    <router-link 
      :to="`/contatos/${id}/editar`"
      class="btn btn-info mt-3">
      Editar
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ContatosDetails',
  data() {
    return {
        id: this.$route.params.id,
    };
  },

  // to, from, next 
  // watch: {
  //   '$route'(to) {
  //     this.id = to.params.id
  //   },
  // },
  beforeRouteUpdate(to, from, next) {
    this.id = to.params.id;
    next();
  },
  created() {
    console.log('params da minha url', this.$route.params);
  },
}
</script>

<style>

</style>