export default {
  namespace: 'sidebar',
  namespaced: true,
  state: {
    opened: true,
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      state.opened = !state.opened;
    },
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR');
    },
  },
};
