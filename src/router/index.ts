import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/card',
    name: 'Card',
    component: () => import('../components/card'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
