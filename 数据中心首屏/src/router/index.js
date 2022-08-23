import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 中文版
  // 绿色能源
  {
    path: '/greenenergy',
    component: () => import('../views/cnversion/Nationalintegration/greenenergy.vue')
  },
  // 资源池
  {
    path: '/resourcepool',
    component: () => import('../views/cnversion/Centralized/resourcepool.vue')
  },
  // 两地三中心
  {
    path: '/twoplace',
    component: () => import('../views/cnversion/Centralized/twoplace.vue')
  },
  // 小型DC
  {
    path: '/littledc',
    component: () => import('../views/cnversion/littledc.vue')
  },
  // ai人工智能
  {
    path: '/aibusiness',
    component: () => import('../views/cnversion/multistagemathcenter/aibusiness.vue')
  },
  // 统一安全管控
  {
    path: '/guankong',
    component: () => import('../views/cnversion/multistagemathcenter/guankong.vue')
  },
  // 统一运营运维
  {
    path: '/yunwei',
    component: () => import('../views/cnversion/multistagemathcenter/yunwei.vue')
  },
  // 人工智能计算中心
  {
    path: '/aiintelligence',
    component: () => import('../views/cnversion/aiintelligence.vue')
  },
  // 高性能数据中心
  {
    path: '/hieightmathcenter',
    component: () => import('../views/cnversion/hieightmathcenter.vue')
  },
  // 东数西算
  {
    path: '/dongshuxisuan',
    component: () => import('../views/cnversion/Nationalintegration/dongshuxisuan.vue')
  },
  // 趋势与挑战
  {
    path: '/challenge',
    component: () => import('../views/cnversion/challenge.vue')
  },
  // 解决方案
  {
    path: '/solution',
    component: () => import('../views/cnversion/solution.vue')
  },
  // 英文版
  {
    path: '/enhome',
    component: () => import('../views/enhome.vue')
  },
  // 英文版
  // 绿色能源
  {
    path: '/engreenenergy',
    component: () => import('../views/enversion/enNationalintegration/engreenenergy.vue')
  },
  // 资源池
  {
    path: '/enresourcepool',
    component: () => import('../views/enversion/enCentralized/enresourcepool.vue')
  },
  // 两地三中心
  {
    path: '/entwoplace',
    component: () => import('../views/enversion/enCentralized/entwoplace.vue')
  },
  // 小型DC
  {
    path: '/enlittledc',
    component: () => import('../views/enversion/enlittledc.vue')
  },
  // ai人工智能
  {
    path: '/enaibusiness',
    component: () => import('../views/enversion/enmultistagemathcenter/enaibusiness.vue')
  },
  // 统一安全管控
  {
    path: '/enguankong',
    component: () => import('../views/enversion/enmultistagemathcenter/enguankong.vue')
  },
  // 统一运营运维
  {
    path: '/enyunwei',
    component: () => import('../views/enversion/enmultistagemathcenter/enyunwei.vue')
  },
  // 人工智能计算中心
  {
    path: '/enaiintelligence',
    component: () => import('../views/enversion/enaiintelligence.vue')
  },
  // 高性能数据中心
  {
    path: '/enhieightmathcenter',
    component: () => import('../views/enversion/enhieightmathcenter.vue')
  },
  // 东数西算
  {
    path: '/endongshuxisuan',
    component: () => import('../views/enversion/enNationalintegration/endongshuxisuan.vue')
  },
  // 趋势与挑战
  {
    path: '/enchallenge',
    component: () => import('../views/enversion/enchallenge.vue')
  },
  // 解决方案
  {
    path: '/ensolution',
    component: () => import('../views/enversion/ensolution.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router