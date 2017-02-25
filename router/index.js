import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import IndexPage from 'components/IndexPage/IndexPage'
import ToplistPage from 'components/ToplistPage/ToplistPage'
import SearchPage from 'components/SearchPage/SearchPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/recom',
      name: 'recom',
      component: IndexPage
    },
    {
      path: '/toplist',
      name: 'toplist',
      component: ToplistPage
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage
    },
    {
      path: '*',
      redirect: '/recom'
    }
  ]
})
