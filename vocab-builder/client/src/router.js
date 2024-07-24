import Vue from 'vue'
import Router from 'vue-router'
import Words from './Words.vue'

Vue.use(Router)

export default new Router({
   routes: [
      {
         path: '/',
         redirect: '/words'
      },
      {
         path: '/words',
         name: 'words',
         component: Words
      }
   ]
})