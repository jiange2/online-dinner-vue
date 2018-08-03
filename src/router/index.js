import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import Shop from '@/components/Shop.vue';
import Order from '@/components/Order.vue';
import OrderList from '@/components/OrderList.vue';
import UserInfo from '@/components/UserInfo.vue';
import CommentList from '@/components/CommentList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/shop/:id',
      name: 'shop',
      component: Shop
    },
    {
      path: '/order/list',
      name: 'orderList',
      component: OrderList
    },
    {
      path: '/order/:shopId',
      name: 'order',
      component: Order
    },
    {
      path: '/user/info',
      name: 'userInfo',
      component: UserInfo
    },
    {
      path: '/comment/:shopId',
      name: 'commentList',
      component: CommentList
    }
  ],
  mode: 'history'
})
