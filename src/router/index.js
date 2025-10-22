import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StoreView from '@/views/StoreView.vue'
import MasculineView from '@/views/MasculineView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/store/:id',
      name: 'store',
      component: StoreView,
    },
    {
      path: '/masculine',
      name: 'masculine',
      component: MasculineView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
    },

  ],
})

export default router
