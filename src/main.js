import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)

firebase.initializeApp({
  apiKey: 'AIzaSyAKQ0i-atlUTQXxVsfsTtVdZmOqgxV51Hg',
  authDomain: 'finance-income-outcome.firebaseapp.com',
  projectId: 'finance-income-outcome',
  storageBucket: 'finance-income-outcome.appspot.com',
  messagingSenderId: '633696215902',
  appId: '1:633696215902:web:1393e0b30699792c29a5cf',
  databaseURL: 'https://finance-income-outcome-default-rtdb.europe-west1.firebasedatabase.app'
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
