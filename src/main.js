import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import './plugins/amplify'
import './plugins/axios'
import './plugins/dc'
import './plugins/leaflet'
import './plugins/moment'
import './plugins/vue2-filters'
import './plugins/vue-filter-pretty-bytes'

import '@/assets/css/tame-styles.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
