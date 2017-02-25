// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'n-zepto'
import Mint from 'mint-ui'
import store from './vuex/store'

import 'common/css/reset.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  Mint,
  template: '<App/>',
  components: { App }
})
