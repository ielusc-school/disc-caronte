<template>
  <div>
    <h1> Cursos Ativo: {{ curso }} </h1>
    <router-link to="/cursos/javascript">Javascript</router-link>
    <router-link to="/cursos/html">HTML</router-link>
    <router-link to="/cursos/css">CSS</router-link>
  </div>
 
</template>

<script>
export default {
  name: 'Cursos',
  computed: {
    curso() {
      return this.$route.params.curso;
    }
  },
  // beforeRouteUpdate() {
  //   console.log('update router');
  // },
  beforeRouteUpdate(to, from, next) {
    console.log('update router', to.params.curso, from);
    next();
  },
};
</script>