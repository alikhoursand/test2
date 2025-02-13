import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TaskView from '../views/TaskView.vue'
import BoostView from '../views/BoostView.vue'
import ReferralView from '../views/ReferralView.vue'
import ProfileView from '../views/ProfileView.vue'
import GiftView from '../views/GiftView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/tasks',
      name: 'tasks',
      component: TaskView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/boost',
      name: 'boost',
      component: BoostView
    },
    {
      path: '/referrals',
      name: 'referrals',
      component: ReferralView
    },
    {
      path: '/gift',
      name: 'gift',
      component: GiftView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
