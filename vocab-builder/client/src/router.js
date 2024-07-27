import Vue from 'vue'
import Router from 'vue-router'
import Words from './components/Words.vue'

Vue.use(Router)

const router = new Router({
   mode: 'history',
   routes: [
      {
         path: '/',
         component: Words
      }
   ]
})

export default router