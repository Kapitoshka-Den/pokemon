import { mount } from '@vue/test-utils'
import BaseLike from '../BaseLike.vue'
import { describe, expect, it } from 'vitest'
import { createTestingPinia } from '@pinia/testing'

const wrapper = mount(BaseLike, {
  props: {
    isLike: false,
  },
  global: {
    plugins: [
      createTestingPinia({
        stubActions: true,
      }),
    ],
  },
})

describe('BaseLike', () => {
  it('рендер лайка по умолчанию', () => {
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.icon').classes()).toContain('unlike')
  })

  /// тест с props.isLike = true
  it('рендер лайка с isLike = true', async () => {
    await wrapper.setProps({ isLike: true })
    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.find('.icon').classes()).toContain('like')
  })

  it('нажатие лайка', async () => {
    await wrapper.trigger('click')
    expect(wrapper.find('.icon').classes()).toContain('animated')
    expect(wrapper.emitted()).toHaveProperty('unlike')

    setTimeout(() => {
      expect(wrapper.find('.icon').classes()).toContain('like')
      expect(wrapper.find('.icon').classes()).not.toContain('animated')
    }, 300)
  })

  it('снятие лайка', async () => {
    await wrapper.setProps({ isLike: true })

    await wrapper.trigger('click')
    expect(wrapper.find('.icon').classes()).toContain('animated')
    expect(wrapper.emitted()).toHaveProperty('unlike')

    setTimeout(() => {
      expect(wrapper.find('.icon').classes()).toContain('unlike')
      expect(wrapper.find('.icon').classes()).not.toContain('animated')
    }, 300)
  })
})
