import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: "AIzaSyArn8b2jJHs6XOK-bI_Ls9psw0_-c_RKiQ",
  authDomain: "vue-crm-748b6.firebaseapp.com",
  databaseURL: "https://vue-crm-748b6.firebaseio.com",
  projectId: "vue-crm-748b6",
  storageBucket: "vue-crm-748b6.appspot.com",
  messagingSenderId: "475746961394",
  appId: "1:475746961394:web:12a9d01805cf9ddf"
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
