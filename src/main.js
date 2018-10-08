// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { store } from './store'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDT7lmtN-BpR_vy5xq35HOQEzyMc_y-zcE',
      authDomain: 'statsoff-899bb.firebaseapp.com',
      databaseURL: 'https://statsoff-899bb.firebaseio.com',
      projectId: 'statsoff-899bb',
      storageBucket: ''
    })
  }
})
