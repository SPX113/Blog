import Vue from 'vue'
import App from './App.vue'
import router from './router'

import  'assets/css/index.css'

//icon库导入
import 'assets/css/icon/iconfont.css'

import {Button,Row,Icon,Card,Tooltip,Image} from 'element-ui';


Vue.use(Button);
Vue.use(Row)
Vue.use(Icon)
Vue.use(Card)
Vue.use(Tooltip)
Vue.use(Image)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
