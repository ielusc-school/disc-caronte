<template>
  <div>
      <ContatoList />
      <!--/id  -->
      <router-view> </router-view>

       <!--/ editar: id  -->
      <router-view name="edit-contato"> </router-view>
  </div>
</template>

<script>
import ContatoList from '@/components/contatos/ContatoList.vue';

export default {
  name: 'Contatos',
  components: {
    ContatoList,
  },
};
</script>