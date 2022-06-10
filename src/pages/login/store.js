export default {
  namespace: 'login',
  namespaced: true,
  state: {
    token: '',
    roles: [],
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_ROLES(state, payload) {
      state.roles = payload;
    },
  },
  actions: {
    LOGIN({ commit }, user) {
      return new Promise((resolve, reject) => {
        // 登录成功，保存token到仓库; 模块内部触发事件，不需要 user/ 前缀
        commit('SET_TOKEN', '456123');
        resolve('123');
      });
    },
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_ROLES', ['admin']);
        resolve(['admin']);
      });
    },
  },
};
