import Vue from 'vue';
import Vuex from 'vuex';
import Store from './store/index';
import App from './App';
import router from './router';
import BootstrapVue from "bootstrap-vue";
import BpComponents from './components/index';
import BpDirectives from './directives/index';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Storage from 'vue-ls'

Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(Store);
Vue.use(BootstrapVue);
Vue.use(BpComponents);
Vue.use(BpDirectives);
Vue.use(Storage);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});