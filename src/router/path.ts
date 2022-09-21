interface Router {
  path: string
  name: string
  component: unknown
  meta?: {
    title: string
    [prxopName: string]: string
  }
}

const routes: Router[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/index.vue'),
    meta: { title: '@kidoki/baseVite 首页' }
  }
]

export default routes
