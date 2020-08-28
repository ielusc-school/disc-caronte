let app = new Vue({
  el: '#app',
  data: {
    message: 'Olar Vue.js'
  },
  methods: {
    sayHello() {
      this.message = this.message.split('').reverse().join('');
    },
  },
});