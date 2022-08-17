import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 中文版
  {
    path: '/wudianchangxuhang',
    component: () => import('../views/homechildren/wudianchangxuhang.vue')
  },
  {
    path: '/wuwangwenhuichuan',
    component: () => import('../views/homechildren/wuwangwenhuichuan.vue')
  },
  // 英文版
  {
    path: '/enwudianchangxuhang',
    component: () => import('../views/enversion/enwudianchangxuhang.vue')
  },
  {
    path: '/enwuwangwenhuichuan',
    component: () => import('../views/enversion/enwuwangwenhuichuan.vue')
  },
  {
    path: '/enhomeview',
    component: () => import('../views/enversion/enhomeview.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router