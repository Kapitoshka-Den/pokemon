import type { RouteRecordRaw } from 'vue-router'
import NotFound from '../pages/NotFound.vue'
import MainLayout from '@/core/pages/MainLayout.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
  },
]
