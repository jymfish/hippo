import Vue from 'vue'
import Router from 'vue-router'
import ShowCenter from '@/components/ShowCenter'
import Login from '@/components/Login'
import Base from '@/components/Base'
import Host from '@/components/Host'
Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      component: Login
    },
        {
      path: '/hippo',
      //name: 'ShowCenter',
      component: Base,
      children:[
        {
          path: 'host/',
          component: Host
        },
        {
          path: 'showcenter/',
          component: ShowCenter
        }
      ]
    },
  ]
})
