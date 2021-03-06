import Vue from 'vue'
import App from './App.vue'
import router from './router'

import  'assets/css/index.css'

//全局fillter
import formatetime from 'common/formatetime'
Vue.filter('formatetime', formatetime)

import hljs from 'highlight.js' //导入代码高亮文件
import 'highlight.js/styles/monokai-sublime.css'  //导入代码高亮样式

Vue.directive('highlight',function (el) {
  let highlight = el.querySelectorAll('pre code');
  highlight.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})





import {Button,Row,Icon,Card,Tooltip,Carousel,CarouselItem,Image,Tag,Pagination,Upload,
  Backtop,Divider,Input,Timeline,TimelineItem,Popover,Menu,MenuItem,Form,FormItem,Switch} from 'element-ui';


Vue.use(Button);
Vue.use(Row)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Tooltip)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)
Vue.use(Tag)
Vue.use(Pagination)
Vue.use(Backtop)
Vue.use(Divider)
Vue.use(Input)
Vue.use(Timeline)
Vue.use(TimelineItem)
Vue.use(Popover)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Switch)
Vue.use(Upload)




Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
