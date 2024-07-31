import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'semantic-ui-css/semantic.css'
import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
