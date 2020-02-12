import Vue from 'vue'
import Vuex from 'vuex'

import allUsers from './modules/allUsers';
import formPosition from './modules/formPositions';
import createToken from './modules/createToken';

Vue.use(Vuex)

 let store = new Vuex.Store({
  modules: {
    allUsers,
    formPosition,
    createToken
  }
})

export default store;