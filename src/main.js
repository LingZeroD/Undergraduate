import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'

import util from './libs/utils'
import validate from './libs/validate'



Vue.config.productionTip = false;//是否打印生产环境提示

Vue.prototype.$util = util;
Vue.prototype.$validate = validate;
Vue.prototype.$navTo = util.navTo;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
