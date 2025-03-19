import type { RouteRecordInfo } from 'vue-router'

export interface RouteNamedMap {
  home: RouteRecordInfo<'home', '/', Record<never, never>, Record<never, never>>
  notFound: RouteRecordInfo<'not-found', '/:path(.*)', Record<never, never>, Record<never, never>>
}

declare module 'vue-router' {
  interface TypesConfig {
    RouteNamedMap: RouteNamedMap
  }
}
