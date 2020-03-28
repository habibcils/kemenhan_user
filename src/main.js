import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import './plugins/toasted';
import './plugins/vue2_page_transition'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import vuetify from './plugins/vuetify'
const VueUploadComponent = require('vue-upload-component')
Vue.config.productionTip = false
Vue.component('file-upload', VueUploadComponent)
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
