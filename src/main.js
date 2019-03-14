// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//add lib
import Vue from 'vue'
import axios from 'axios'
import VModal from 'vue-js-modal'
import Notifications from 'vue-notification'

//import component
import App from './App'
import router from './router'
import store from './store'
import validator from './validator'
import servers from './assets/config/servers'
import util from './assets/js/util'
import "vue-form-generator/dist/vfg.css";
import ClientWs from './assets/js/ClientWS'
//import uploader from 'vue-easy-uploader'


//css-lib
import 'font-awesome/css/font-awesome.css'
//css
import '@/assets/css/common.scss'

//add utils
Vue.prototype.$http = axios;
Vue.prototype.$servers = servers;
Vue.prototype.$util = util;

//
Vue.config.productionTip = false;
//
Vue.use(VModal,{ componentName: "vue-modal" });
Vue.use(Notifications);
//Vue.use(uploader, store);
//Init WebSocket
//Vue.prototype.$ws = new ClientWs(servers.clientWebSocket);

//config
axios.defaults.withCredentials = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});



