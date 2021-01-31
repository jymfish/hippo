// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Antd from 'ant-design-vue';
import axios from "axios";
import 'ant-design-vue/dist/antd.css';
let echarts = require('echarts');
import settings from "./settings";


Vue.prototype.$echarts = echarts//封装给vue，使用的时候使用Vue.$echarts.功能
Vue.prototype.$axios = axios
Vue.prototype.$settings = settings
Vue.use(Antd);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
