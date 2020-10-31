<template>
  <li>
    <span class="float-left"> {{ contato.name }} | {{contato.email}} </span>
    <router-link 
      :to="`/contatos/${contato.id}`" 
      class="btn btn-info float-right"> Detalhes </router-link>
  </li>
</template>

<!-- name | <button> Detalhes </button>  --> 

<script>
export default {
  name: 'ContatoListItem',
  props: {
    contato: {
      type: Object,
      required: true,
    },
  },
  created() {
    console.log(this.contato);
  },
}
</script>

<style>

</style>