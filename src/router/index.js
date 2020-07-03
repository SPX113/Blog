import Vue from 'vue'
import VueRouter from 'vue-router'

import NProgress from 'nprogress'  //顶部进度条
import 'nprogress/nprogress.css'

Vue.use(VueRouter)



const Index = () => import('views/index')
const Label = () => import('views/label/Label')
const TimeLine = () => import('views/timeline/TimeLine')
const Message = () => import('views/message/Message')
const About = () => import('views/about/About')

const routes=[
  {
    path: '',
    redirect : '/index'
  },
  {
    path : '/index',
    component: Index
  },
  {
    path: '/label',
    component : Label
  },
  {
    path: '/timeline',
    component : TimeLine
  },
  {
    path: '/message',
    component : Message
  },
  {
    path: '/about',
    component : About
  }

]

const router = new VueRouter({
  routes,
  mode : 'history'
})

//切换路由淡入淡出效果
router.beforeEach((to, from, next) => {
  NProgress.start()  //开启
  next()
})
router.afterEach(() => {
  NProgress.done()  //关闭
})


export default router