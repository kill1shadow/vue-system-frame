import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

import vuexPersistedstate from 'vuex-persistedstate';

Vue.use(Vuex);

import login from '@/pages/login/store';
import permission from './modules/permission';
import sidebar from '@/Layout/components/Sidebar/store.js';
import tagsView from '@/Layout/components/TagsView/store.js';

console.log(sidebar);
export default new Vuex.Store({
  getters,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    [login.namespace]: login,
    [permission.namespace]: permission,
    [sidebar.namespace]: sidebar,
    [tagsView.namespace]: tagsView,
  },
  plugins: [
    vuexPersistedstate({
      storage: sessionStorage,
      paths: ['permission.routes', 'login.token', 'login.roles'],
    }),
  ],
});
