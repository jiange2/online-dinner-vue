import Vue from 'vue'
import Vuex from 'vuex'
import client from './modules/client.js'
import cart from './modules/cart.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    client: client,
    cart: cart
  }
});

export default store
