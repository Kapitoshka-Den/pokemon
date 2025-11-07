import { describe, expect, it } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import { createTestingPinia } from '@pinia/testing'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

describe('навигация', () => {
  it('проверка навигации на невалидный url', async () => {
    router.push('/not-found-test')

    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [router, createTestingPinia()],
      },
    })
    expect(wrapper.find('h1').text()).toBe('Not Found')
  })
})
