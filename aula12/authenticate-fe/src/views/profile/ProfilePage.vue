<template>
  <div class="container">
  <!-- {{ user }} -->
  <div class="row">
    <div class="col-md-4"  v-for="pessoa in user" :key="pessoa.id">
      <h1> {{pessoa.name.first}} {{pessoa.name.last}}</h1>
      <img :src="pessoa.picture.large" alt="">
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProfilePage',
  data() {
    return {
      user: {},
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
      let url = 'https://randomuser.me/api/?results=5';

      axios.get(url)
        .then(response => {
          console.log(response.data);
          this.user = response.data.results;
      }).catch(error => {
        console.log(error);
      });
    }
  },
};
</script>

<style>

</style>