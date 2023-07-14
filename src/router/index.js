import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/stylebinding',
      name: 'styleBinding',
      component: () => import('../views/StyleBindingView.vue')
    },
    {
      path: '/classbinding',
      name: 'classBinding',
      component: () => import('../views/ClassBindingView.vue')
    },
    {
      path: '/logic',
      name: 'logic',
      component: () => import('../views/LogicView.vue')
    }
  ]
})

export default router
