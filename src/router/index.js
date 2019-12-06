import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children:[
      {
        path: '/home/my',
        name: 'my',
        component: () => import('../views/My.vue')
      },
      {
        path: '/home/text',
        name: 'text',
        component: () => import('../views/Text.vue')
      },
       {
        path:"/home",
        redirect:'/home/text'
      }
    ]
  },
  {
    path:"/",
    redirect:'/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
