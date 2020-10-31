<template>
  <div>
    <div class="alert alert-danger">
      <h3 class="text-center">
        <strong>Erro 404:</strong> Ops, essa página que tu inseriu não existe.
      </h3>
    </div>
    <button class="btn btn-secondary mb-4 mt-t-4"
      @click="goBackPage">
      Voltar
    </button>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  methods: {
    goBackPage() {
      this.$router.back();
    },
  },
};
</script>