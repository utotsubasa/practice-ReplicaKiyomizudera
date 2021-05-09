import { createRouter, createWebHistory } from 'vue-router'
import Top from '../views/Top.vue'

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/project',
    name: 'Project',
    component: () => import('../views/Project.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import('../views/Info.vue')
  },
  {
    path: '/tabloid',
    name: 'Tabloid',
    component: () => import('../views/Tabloid.vue')
  },
  {
    path: '/project/1000',
    name: 'Project_1000',
    component: () => import('../views/indulge_in_flowers.vue')
  },
  {
    path: '/project/970',
    name: 'Project_970',
    component: () => import('../views/moon_in_your_hands.vue')
  },
  {
    path: '/project/931',
    name: 'Project_931',
    component: () => import('../views/meeting_opportunity.vue')
  },
  {
    path: '/project/891',
    name: 'Project_891',
    component: () => import('../views/day_after_day.vue')
  },
  {
    path: '/project/799',
    name: 'Project_799',
    component: () => import('../views/call.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
