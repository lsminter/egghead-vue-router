import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Egghead from '../components/Egghead'
import PageNotFound from '../components/PageNotFound'
import FailedAuth from '../components/FailedAuth'
import blogRoutes from './blog-routes'
import aboutMeRoute from './about-me'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: '/egghead',
    component: Egghead,
    meta: {
      requiresAuth: true,
    },
  },
  ...blogRoutes,
  ...aboutMeRoute,
  {
    path: '/failed',
    component: FailedAuth,
  },
  {
    path: 'pageNotFound',
    alias: '*',
    component: PageNotFound,
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

function isAuthenticated() {
  return true
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isAuthenticated()) {
      next()
    } else {
      next('/failed')
    }
  } else {
    next()
  }
})

export default router