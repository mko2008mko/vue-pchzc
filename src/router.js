import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Container from './views/Container.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      // name: 'Container',
      component: Container,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: '/zhuanche',
          component: () => import('./views/ZhuanChe.vue')
        },
        {
          path: '/DriveStrategy',
          component: () => import('./views/DriveStrategy.vue')
        },
        {
          path: '/huodong',
          component: () => import('./views/HuoDong.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
});
