import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Store from '../components/temp/Store.vue'
import Index from '../components/temp/Index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, children: [{ path: '/store', component: Store }, { path: '/index', component: Index }] }
]

const router = new VueRouter({
  routes
})

// 路由拦截
// 暴露出router之前，启动路由导航守卫
router.beforeEach((to, from, next) => {
  // to从哪里来 from要去哪里 next()放行 next('/login')强制跳转到/login
  if (to.path === '/') {
    // 如果要求登录页面，放行
    return next()
  }
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) {
    // 如果获取的token为空，强行跳到/login
    // return next('/login')
    return next()
  }
  // 有token，且不为空，放行
  next()
})
export default router
