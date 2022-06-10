const getters = {
  token: state => state.login.token,
  permission_routes: state => state.permission.routes,
  roles: state => state.login.roles,
  opened: state => state.sidebar.opened,
};

export default getters;
