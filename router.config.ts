import type { RouteRecordInfo } from 'vue-router'

export interface RouteNamedMap {
  pokemon: RouteRecordInfo<'pokemon', '/', Record<never, never>, Record<never, never>>
  'pokemon-details': RouteRecordInfo<
    'pokemon-details',
    '/:id',
    { id: string | number },
    { id: string }
  >
  notFound: RouteRecordInfo<'not-found', '/:path(.*)', Record<never, never>, Record<never, never>>
}

declare module 'vue-router' {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}
