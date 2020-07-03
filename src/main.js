import Vue from 'vue'
import App from './App.vue'
import router from './router'

import {Button,Row,Icon} from 'element-ui';


Vue.use(Button);
Vue.use(Row)
Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
