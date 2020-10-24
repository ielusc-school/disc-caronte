export const logoutMixin = {
  methods: {
    efetuarLogout() {
      this.$store.commit('DESLOGAR_USUARIO');
      this.$router.push({ name: 'login'});
    },
  }
}


  export const loginMixin =  {
    methods: {
    efetuarLogin() {
      const url = 'auth/login';
      this.$http.post(url, this.usuario)
      .then(response => {
        // localStorage.setItem('token', response.data.access_token);
        this.$store.state.token = response.data.access_token;
        this.$store.state.usuario = response.data.user;
        console.log(this.$store.state.usuario);
        console.log(this.$store.state.token);
        this.$router.push({ name: 'gerentes'});
      }).catch(error => {
        console.log(error);
      });
    },
   },
  }