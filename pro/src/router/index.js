import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/components/Login'
import Login from '@/views/Login'
import Articles from '@/views/Articles'
import Console from '@/views/Console'
import Echarts from '@/views/Echarts'
import Index from '@/views/Index'
import NotFound from '@/views/NotFound'
import Users from '@/views/Users'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/404',
      component: NotFound
    },
    {
      path: '*',
      redirect: { path: '/404' }
    },
    {
      path:'/',
      component:Index,
      children: [
        {
          path: '/console',
          name: 'console',
          component: Console
        },
        {
          path: '/users',
          name: 'users',
          component: Users
        },
        {
          path: '/articles',
          name: 'articles',
          component: Articles
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: Echarts
        }
      ]
    }
  ]
})
