import { mount, RouterLinkStub } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PokemonCard from '../components/PokemonCard.vue'
import { createTestingPinia } from '@pinia/testing'

describe('PokemonCard', () => {
  it('проверка данных карточки', async () => {
    const cardWrapper = mount(PokemonCard, {
      global: {
        stubs: { RouterLink: RouterLinkStub },
        plugins: [
          createTestingPinia({
            stubActions: false,
          }),
        ],
      },
      props: {
        name: 'pikachu',
        id: 1,
      },
    })

    expect(cardWrapper.findComponent(RouterLinkStub).props('to')).toEqual({
      name: 'pokemon-details',
      params: { id: 1 },
    })
    expect(cardWrapper.find('img').attributes('src')).toEqual(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg',
    )
    expect(cardWrapper.find('span').text()).toBe('pikachu')
  })
})
