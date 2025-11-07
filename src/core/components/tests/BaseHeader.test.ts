import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, it } from 'vitest'
import BaseHeader from '../BaseHeader.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/core/router/routes'

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

describe('BaseHeader', () => {
  it('проверка наличия роутера', async () => {
    const wrapper = mount(BaseHeader, {
      global: {
        stubs: RouterLinkStub,
        plugins: [router],
      },
    })
    wrapper.find(`a[href='/']`).exists()
  })
})
