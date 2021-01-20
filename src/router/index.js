import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/Front.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/front/Home.vue'),
      },
      {
        path: 'maps',
        component: () => import('@/views/front/DivingMaps.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('@/views/front/Products.vue'),
      },
      {
        path: 'product/:id',
        name: 'Product',
        component: () => import('@/views/front/Product.vue'),
      },
      {
        path: 'knowMore',
        component: () => import('@/views/front/KnowUS.vue'),
      },
      {
        path: 'login',
        component: () => import('@/views/Login.vue'),
      },
      {
        path: 'cart',
        component: () => import('@/views/front/Cart.vue'),
        children: [
          {
            path: 'submit',
            name: 'Submit',
            component: () => import('@/views/front/CartSubmit.vue'),
          }, {
            path: 'insert',
            name: 'Insert',
            component: () => import('@/views/front/CartInsert.vue'),
          },
          {
            path: 'finish',
            name: 'Finish',
            component: () => import('@/views/front/CartFinish.vue'),
          },
        ],
      },

    ],
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/dashboard/Products.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/dashboard/Coupons.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/dashboard/Orders.vue'),
      },
      {
        path: 'imageCatch',
        component: () => import('../views/dashboard/ImageCatch.vue'),
      },
    ],
  },
  {
    path: '*',
    redicect: '/',
  },
];

const router = new VueRouter({
  routes,
});

export default router;
