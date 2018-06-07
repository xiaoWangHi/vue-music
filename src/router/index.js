import Vue from 'vue'
import Router from 'vue-router'
// 组件
import Recommoned from 'components/recommoned/recommoned'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommoned'
    },
    {
      path: '/recommoned',
      component: Recommoned
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }]
})