import Vue from 'vue'
import Router from 'vue-router'
import Words from './components/Words.vue'

Vue.use(Router)

export default new Router({
   routes: [
      {
         path: '/',
         component: Words
      }
   ]
})