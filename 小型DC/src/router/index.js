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
    path: '/fusioncube1000h',
    component: () => import('../views/cnversion/fusioncube1000h.vue')
  },
  {
    path: '/oceanstor',
    component: () => import('../views/cnversion/oceanstor.vue')
  },
  {
    path: '/intelligenceies',
    component: () => import('../views/cnversion/intelligenceies.vue'),
  },
  {
    path: '/fusioncube1000c',
    component: () => import('../views/cnversion/fusioncube1000c.vue'),
  },
  {
    path: '/atals',
    component: () => import('../views/cnversion/atals.vue'),
  },
  {
    path: '/fusioncubefive',
    component: () => import('../views/cnversion/fusioncubefive.vue'),
  },
  {
    path: '/demoview',
    component: () => import('../views/cnversion/demoview.vue'),
  },
  {
    path: '/chaorongheresource',
    component: () => import('../views/cnversion/chaorongheresource.vue'),
  },
  {
    path: '/qinglianghuaresource',
    component: () => import('../views/cnversion/qinglianghuaresource.vue'),
  },
  {
    path: '/qinglianghuaresourseone',
    component: () => import('../views/cnversion/qinglianghuaresourseone.vue'),
  },
  {
    path: '/fusionmodule',
    component: () => import('../views/cnversion/fusionmodule.vue'),
  },
  {
    path: '/fusioncube800',
    component: () => import('../views/cnversion/fusioncube800.vue'),
  },
  //二级页面
  {
    path: '/saasasis',
    component: () => import('../views/iesitem/SaasAsis.vue'),
  },
  {
    path: '/saastobe',
    component: () => import('../views/iesitem/SaasTobe.vue'),
  },
  {
    path: '/yizhanshiasis',
    component: () => import('../views/iesitem/YizhanshiAsis.vue'),
  },
  {
    path: '/yizhanshitobe',
    component: () => import('../views/iesitem/YizhanshiTobe.vue'),
  },
  {
    path: '/jituanduofenzhiasis',
    component: () => import('../views/iesitem/JituanduofenzhiAsis.vue'),
  },
  {
    path: '/jituanduofenzhitobe',
    component: () => import('../views/iesitem/JituanduofenzhiTobe.vue'),
  },
  // 英文版
  {
    path: '/enhomeview',
    component: () => import('../views/enhomeview.vue'),
  },
  {
    path: '/enfusioncube1000h',
    component: () => import('../views/enversion/Enfusioncube1000h.vue'),
  },
  {
    path: '/enoceanstor',
    component: () => import('../views/enversion/Enoceanstor.vue'),
  },
  {
    path: '/enintelligenceies',
    component: () => import('../views/enversion/Enintelligenceies.vue'),
  },
  {
    path: '/enfusioncube1000c',
    component: () => import('../views/enversion/Enfusioncube1000c.vue'),
  },
  {
    path: '/enatals',
    component: () => import('../views/enversion/Enatals.vue'),
  },
  {
    path: '/enfusioncubefive',
    component: () => import('../views/enversion/Enfusioncubefive.vue'),
  },
  {
    path: '/endemoview',
    component: () => import('../views/enversion/Endemoview.vue'),
  },
  {
    path: '/enchaorongheresource',
    component: () => import('../views/enversion/Enchaorongheresource.vue'),
  },
  {
    path: '/enqinglianghuaresource',
    component: () => import('../views/enversion/Enqinglianghuaresource.vue'),
  },
  {
    path: '/enfusionmodule',
    component: () => import('../views/enversion/Enfusionmodule.vue'),
  },
  {
    path: '/enqinglianghuaresourseone',
    component: () => import('../views/enversion/Enqinglianghuaresourseone.vue'),
  },
  {
    path: '/enfusioncube800',
    component: () => import('../views/enversion/Enfusioncuve800.vue'),
  },
  // 英文二级页面
  {
    path: '/enjituanduofenzhizhiasis',
    component: () => import('../views/eniesitem/EnJituanduofenzhiAsis.vue'),
  },
  {
    path: '/enjituanduofenzhitobe',
    component: () => import('../views/eniesitem/EnJituanduofenzhiTobe.vue'),
  },
  {
    path: '/ensaasasis',
    component: () => import('../views/eniesitem/EnSaasAsis.vue'),
  },
  {
    path: '/ensaastobe',
    component: () => import('../views/eniesitem/EnSaasTobe.vue'),
  },
  {
    path: '/enyizhanshiasis',
    component: () => import('../views/eniesitem/EnYizhanshiAsis.vue'),
  },
  {
    path: '/enyizhanshitobe',
    component: () => import('../views/eniesitem/EnYizhanshiTobe.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router