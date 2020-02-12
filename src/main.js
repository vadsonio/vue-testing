import Vue from 'vue'
import App from './App.vue'

// vuelidate
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// v-mask
import VueMask from 'v-mask'
Vue.use(VueMask)

// vuex global store
import store from './store/index.js';

import './directives/directives';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
