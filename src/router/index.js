import Vue from 'vue'
import VueRouter from 'vue-router'

import NProgress from 'nprogress'  //顶部进度条
import 'nprogress/nprogress.css'

Vue.use(VueRouter)



const Index = () => import('views/index')
const TimeLine = () => import('views/timeline/TimeLine')
const Message = () => import('views/message/Message')
const About = () => import('views/about/About')
const Detail = () => import('views/detail/Detail')
const Commit = () => import('views/commit/Commit')

const routes=[
  {
    path: '',
    redirect : '/index'
  },
  {
    path : '/index',
    component: Index,
    meta:{
      title : '主页'
    }
  },
  {
    path: '/timeline',
    component : TimeLine,
    meta:{
      title : '时间线'
    }
  },
  {
    path: '/message',
    component : Message,
    meta:{
      title : '留言板'
    }
  },
  {
    path: '/about',
    component : About,
    meta:{
      title : '关于'
    }
  },
  {
    path: '/detail/:id',
    component : Detail,
    meta: {
      title: '文章'
    }
  },
  {
    path: '/commit',
    component: Commit,
    meta: {
      title: '上传博客'
    }
  }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})


//全局守卫
//切换路由淡入淡出效果
router.beforeEach((to, from, next) => {
  NProgress.start()  //开启
  next()

  //标题变化
  document.title = to.meta.title + ' | SPX-Blog'

})
router.afterEach(() => {
  NProgress.done()  //关闭
})





export default router