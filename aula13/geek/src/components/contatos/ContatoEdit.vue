<template>
  <div>
    <h3>Editar Cadastro ID: {{$route.params.id}}</h3>
    <button 
      class="btn btn-info"
      @click="$router.back()">Voltar
    </button>
  </div>
</template>

<script>
export default {
  name: 'ContatoEdit',
  data() {
    return {
     
    }
  }
}
</script>