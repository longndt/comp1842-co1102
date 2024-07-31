import Vue from 'vue'
import Router from 'vue-router'
import Words from './views/Words.vue'
import New from './views/New.vue'

Vue.use(Router)

const router = new Router({
   mode: 'history',
   routes: [
      {
         path: '/',
         redirect: '/words'
      },
      {
         path: '/words',
         component: Words
      },
      {
         path: '/words/new',
         component: New
      }
   ]
})

export default router