import Vue from 'vue';
import Vuex from 'vuex';
import nestedModule from './modules/nested';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    nestedModule,
  },
});

export default store;
