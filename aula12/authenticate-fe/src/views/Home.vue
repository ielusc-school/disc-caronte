<template>
  <div class="home container">
    <h1 class="display-4">Welcome! The James Bank!</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo quidem quia eum non ut, vero possimus tenetur accusamus, quibusdam aperiam repellendus deleniti! Et repellendus deserunt eligendi, autem error iusto illum!</p>
    <button @click="efetuarLogout">Sair</button>
    
  </div>
</template>

<script>

import { logoutMixin } from '@/mixins';

export default {
  name: 'Home',
  mixins: [logoutMixin],
}
</script>
