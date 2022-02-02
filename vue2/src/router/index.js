import VueRouter from 'vue-router'
import store from '@/store/index.js'

console.log('%c [ store ]-4', 'font-size:13px; background:pink; color:#bf2c9f;', store)

// 路由懒加载
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/page/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/page/user/login.vue'),
        beforeEnter: (to, from, next) => {
          // 路由独享的守卫
          next()
        }
    },
    {
        path: '*',
        component: () => import('@/page/404.vue')
    }
]

const router = new VueRouter({
    routes: routes // es6语法 对象属性的简写
})
//全局前置守卫
router.beforeEach((to, from, next) => {
  console.log('%c [ 全局前置守卫 ]-34', 'font-size:13px; background:pink; color:#bf2c9f;', to, from)
  if (to.name !== 'login' && !store.state.user.isLogin) next({ name: 'login' })
  // 如果用户未能验证身份，则 `next` 会被调用两次
  next()
})
//全局解析守卫
router.beforeResolve((to, from, next) => {
  console.log('%c [ 全局解析守卫 ]', 'font-size:13px; background:pink; color:#bf2c9f;', to, from)
  next()
})
//全局后置守卫
router.afterEach((to, from) => {
  console.log('%c [ 全局后置守卫 ]', 'font-size:13px; background:pink; color:#bf2c9f;', to, from)
})
  // 组件内的守卫
  // beforeRouteEnter
  // beforeRouteUpdate 
  // beforeRouteLeave

export default router;