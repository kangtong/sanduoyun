import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 中文版
  {
    path: '/kanghuangdong',
    component: () => import('../views/cnversion/kanghuangdong.vue')
  },
  {
    path: '/chedaodingwei',
    component: () => import('../views/cnversion/chedaodingwei.vue')
  },
  {
    path: '/chaoyuantance',
    component: () => import('../views/cnversion/chaoyuantance.vue')
  }
  // 英文版
  ,
  {
    path: '/enchaoyuantance',
    component: () => import('../views/enversion/enchaoyuantance.vue')
  },
  {
    path: '/enchedaodingwei',
    component: () => import('../views/enversion/enchedaodingwei.vue')
  },
  {
    path: '/enkanghuangdong',
    component: () => import('../views/enversion/enkanghuangdong.vue')
  },
  {
    path: '/enhome',
    component: () => import('../views/enhome.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router