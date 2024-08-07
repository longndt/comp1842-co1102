import Vue from 'vue'
import Router from 'vue-router'
import Words from './views/Words.vue'
import New from './views/New.vue'
import Show from './views/Show.vue'
import Edit from './views/Edit.vue'

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
         name: 'Words',
         component: Words
      },
      {
         path: '/words/new',
         name: 'New',
         component: New
      },
      {
         path: '/words/show/:id',
         name: 'Show',
         component: Show
      },
      {
         path: '/words/edit/:id',
         name: 'Edit',
         component: Edit
      },
   ]
})

export default router