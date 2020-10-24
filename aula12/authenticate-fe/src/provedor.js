import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const estado = {
  token: null,
  usuario: {}
}

const mutations = {
  DEFINIR_USUARIO_LOGADO(state, {token, usuario}) {
    state.usuario = usuario;
    state.token = token;
  },
  DESLOGAR_USUARIO(state) {
    state.usuario = {};
    state.token = null;
  }
}

export default new Vuex.Store({
  state: estado,
  mutations
});