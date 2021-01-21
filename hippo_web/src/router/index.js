import Vue from 'vue'
import Router from 'vue-router'
import ShowCenter from '@/components/ShowCenter'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      //name: 'ShowCenter',
      component: ShowCenter
    }
  ]
})
