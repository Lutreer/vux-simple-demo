import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex({
  modules:{
    user
  },
  strict: true

})
