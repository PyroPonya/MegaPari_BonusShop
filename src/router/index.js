import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import MainView from '../views/MainView.vue';
import CatalogView from '../views/CatalogView.vue';

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'home',
      component: MainView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
