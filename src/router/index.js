import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Search from '@/components/Search'
import AddAnswer from '@/components/AddAnswer'
import AddQuestion from '@/components/AddQuestion'
import Detail from '@/components/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/addAnswer',
      name: 'AddAnswer',
      component: AddAnswer
    },
    {
      path: '/addQuestion',
      name: 'AddQuestion',
      component: AddQuestion
    }
  ]
})
