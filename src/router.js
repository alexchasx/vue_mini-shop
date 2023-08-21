import { createRouter, createWebHistory } from 'vue-router';

import AppProductList from './components/AppProductList.vue';
import AppCart from './components/AppCart.vue';
import AppCheckout from './components/AppCheckout.vue';
import AppE404 from './components/AppE404.vue';
import AppProduct from './components/AppProduct.vue';

const routes = [
  {
    name: 'catalog',
    path: '/',
    component: AppProductList,
  },
  {
    name: 'cart',
    path: '/cart',
    component: AppCart,
  },
  {
    name: 'checkout',
    path: '/order',
    component: AppCheckout,
  },
  {
    name: 'product',
    path: '/product/:id',
    component: AppProduct,
  },
  {
    path: '/:any(.*)',
    component: AppE404,
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
