import Vue from 'vue'
import BootstrapVue from "bootstrap-vue";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

import "./assets/style.scss";
import { BAlert } from "bootstrap-vue";
Vue.component("b-alert", BAlert);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(router);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
