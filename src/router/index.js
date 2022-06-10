import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/Layout';

Vue.use(VueRouter);

export const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'el-icon-s-comment', affix: true },
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/pages/login/index'),
    hidden: true,
  },
  {
    path: '/test1',
    component: Layout,
    children: [
      {
        path: 'test',
        component: () => import('@/pages/test1/index'),
        name: 'Test',
        meta: { title: '测试页', icon: 'el-icon-s-flag', affix: true },
      },
    ],
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1/menu1-1',
    name: 'Nested',
    meta: {
      title: 'menu嵌套路由',
      icon: 'el-icon-camera',
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/pages/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu 1' },
        redirect: '/nested/menu1/menu1-1',
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/pages/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu 1-1' },
          },
          {
            path: 'menu1-2',
            component: () => import('@/pages/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            redirect: '/nested/menu1/menu1-2/menu1-2-1',
            meta: { title: 'Menu 1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/pages/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu 1-2-1' },
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/pages/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu 1-2-2' },
              },
            ],
          },
          {
            path: 'menu1-3',
            component: () => import('@/pages/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu 1-3' },
          },
        ],
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: () => import('@/pages/nested/menu2/index'),
        meta: { title: 'Menu 2' },
      },
    ],
  },
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  routes,
});

export default router;
