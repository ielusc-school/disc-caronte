<template>
  <div class="container">
    <h1>Gerentes</h1>
    <div class="row">
      <Gerente 
      v-for="gerente in gerentes" 
      :key="gerente.numero" 
      :gerente="gerente" />
    </div>
  </div>
</template>

<script>
import Gerente from '@/components/Gerente.vue'

export default {
  name: 'ManagerPage',
  components: {
    Gerente
  },
  data() {
    return {
      gerentes: [
      ]
    };
  },
  created() {
    this.getManagers();
  },
  methods: {
    getManagers() {
      this.$http.get('/gerentes')
      .then(response => {
        this.gerentes = response.data;
      }).catch(erro => {
        console.log(erro);
      })
    }
  },
}
</script>