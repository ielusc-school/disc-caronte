<template>
  <div>
    <h3 class="font-weigth-ligth">Contatos</h3>
    <div class="form-group">
      <input type="search"
      class="form-control"
      placeholder="buscar contatos......"
      @keyup.enter="getContact"
      :value="$route.query.busca">
    </div>
    <ul class="list-group" v-if="contactFilter.length > 0">
      <ContatoListItem 
        class="list-group-item"
        v-for="contato in contactFilter"
        :key="contato.id"
        :contato="contato"
      /> 
    </ul>
    <p v-else> Não existem contatos adicioandos </p>
  </div>
</template>

<script>
import ContatoListItem from './ContatoListItem.vue'; 

export default {
  name: 'ContatoList',
  components: {
    ContatoListItem
  },
  data() {
    return {
      contatos: [
        {id: 1, name: 'João', email: 'joãodasilva@gmail.com'},
        {id: 2, name: 'Carlos', email: 'carlos@gmail.com'},
        {id: 3, name: 'Tiago', email: 'tiago@gmail.com'},
      ],
    };
  },
  computed: {
    contactFilter() {
      const busca = this.$route.query.busca;
      return !busca 
        ? this.contatos
        : this.contatos.filter(c => c.name.toLowerCase()
        .includes(busca.toLowerCase()));
    },
  },
  methods: {
    getContact(event) {
      this.$router.push({
        path: '/contatos',
        query: {busca: event.target.value }
      })
    }
  }
}
</script>