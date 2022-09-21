import { createRouter, createWebHistory } from 'vue-router'
import Routes from './path'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: <any>Routes
})

/**
 *  to: Route， 即将要进入的目标 路由对象
 *  from: Route，当前导航正要离开的路由
 *  next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
 *  next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
 *  next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
 */
router.beforeEach((to, form, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router
