import Vue from 'vue'
import App from './App.vue'

// 引入插件，放在此处引用是为了下面的router和store中可能会用到某些插件的功能。
import './plugins/index'

import router from './router'
import store from './store'

// 引入样式
import './styles/index.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
