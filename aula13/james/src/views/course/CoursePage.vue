<template>
  <div>
    <h1>Curso {{curso}} </h1>
    <router-link to="/cursos/html">HTML</router-link>
    <router-link to="/cursos/css">CSS</router-link>
    <router-link to="/cursos/javascript">JavaScript</router-link>
    <router-link to="/cursos/json">JSON</router-link>
    <router-link to="/cursos/vue">Vue</router-link>

  </div>
</template>

<script>
export default {
  name: 'CoursePage',
  props: [
    'curso',
  ],
  // computed: {
  //   courseActive() {
  //     return this.$route.params.curso;
  //   }
  // },
  created() {
    console.log('renderizou o componente');
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(to, from);
    console.log(to.params.curso, from);
    // console.log('trocou o componente');
    next();
  },
}
</script>

<style>

</style>