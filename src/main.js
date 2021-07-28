import Vue from "vue";
// import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

import "./assets/style.scss";

import airtabel_api from "./components/airtable-api";
Vue.use(airtabel_api);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

// Vue.use(BootstrapVue);
Vue.use(router);

Vue.prototype.$User_Code_G;
Vue.prototype.$Id_G;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
