import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入axios网络请求函数
import axios from 'axios'
// 设置默认url地址前缀
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
// 全局挂载之前拦截所有请求添加token
axios.interceptors.request.use(config => {
  console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  // 固定写法最后必须return config
  return config
})
// 全局挂载axios
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
