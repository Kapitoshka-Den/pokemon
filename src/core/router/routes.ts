import type { RouteRecordRaw } from 'vue-router'
import NotFound from '../pages/NotFound.vue'
import MainLayout from '@/core/pages/MainLayout.vue'
import PokemonPage from '@/modules/pokemon/pages/PokemonPage.vue'
import PokemonDetailsPage from '@/modules/pokemon/pages/PokemonDetailsPage.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        name: 'pokemon',
        alias: 'pokemon',
        component: PokemonPage,
      },
      {
        path: 'pokemon/:id',
        name: 'pokemon-details',
        alias: 'pokemon/:id',
        component: PokemonDetailsPage,
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound,
      },
    ],
  },
]
