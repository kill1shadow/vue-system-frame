<template>
  <div>
    <!-- :collapse="isCollapse" -->
    <!-- v-if="showLogo" -->
    <logo :collapse="isCollapse" />

    <!--    :collapse="isCollapse"   :default-active="activeMenu" -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :default-active="activeMenu"
        :collapse="isCollapse"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Logo from './Logo';
import SidebarItem from './SidebarItem';
import variables from '@/styles/variables.scss';

export default {
  name: 'SideBar',
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(['permission_routes', 'opened']),

    activeMenu() {
      const route = this.$route;
      const { meta, path } = route;
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path;
    },
    //   showLogo() {
    //     return this.$store.state.settings.sidebarLogo
    //   },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.opened;
    },
  },
};
</script>
