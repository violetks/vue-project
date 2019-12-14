import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

// 引入axios,使用axios.create()创建请求实例，定义接口根地址，绑定到Vue原型上（$防止名字重复）
// 可以在任意界面上通过this.$http访问axios实例
import axios from 'axios'

Vue.prototype.$http = axios.create({
  baseURL: 'http://localhost:3001/api'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
