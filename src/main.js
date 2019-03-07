import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

/* eslint-disabled */
import firebase from './firebase';
import auth from './auth';
/* eslint-enabled */
import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

Vue.use(Buefy);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
