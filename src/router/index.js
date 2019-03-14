import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
import Shop from '@/components/Shop.vue';
import Order from '@/components/Order.vue';
import OrderList from '@/components/OrderList.vue';
import UserInfo from '@/components/UserInfo.vue';
import CommentList from '@/components/CommentList.vue';
import AddImage from '@/components/AddImage.vue'
import ViewImage from '@/components/ViewImage.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login2',
      component: ViewImage
    },
    {
      path: '/addImage',
      name: 'image',
      component: AddImage
    },
    {
      path: '/image/list',
      name: 'ViewImage',
      component: ViewImage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
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
