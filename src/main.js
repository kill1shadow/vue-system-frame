import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import '@/styles/index.scss';
Vue.use(Element);



import './permission.js';

Vue.prototype.$dispatch = (...args) => store.dispatch(...args);
Vue.prototype.$commit = (...args) => store.commit(...args);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
