import { setActivePinia } from 'pinia'
import { createTestingPinia, type TestingOptions } from '@pinia/testing'
import { beforeEach, describe, expect, it } from 'vitest'
import { useLikedPokemonStore } from './store'

function setupTestPinia(options?: TestingOptions) {
  setActivePinia(
    createTestingPinia({
      stubActions: false,
      ...options,
    }),
  )
}

describe('тестирование store', () => {
  beforeEach(() => {
    setupTestPinia()
  })

  it('добавление покемона в любимые', () => {
    const store = useLikedPokemonStore()

    expect(store.likedPokemons).toEqual([])
    store.addLikedPokemons('bulbasaur')
    expect(store.likedPokemons).toEqual(['bulbasaur'])
  })

  it('удаление покемона из любимых', () => {
    setupTestPinia({
      initialState: {
        likedPokemon: {
          likedPokemons: ['bulbasaur'],
        },
      },
    })

    const store = useLikedPokemonStore()

    expect(store.likedPokemons).toEqual(['bulbasaur'])
    store.removeLikedPokemons('bulbasaur')
    expect(store.likedPokemons).toEqual([])
  })

  it('проверка наличия покемона в любимых', () => {
    setupTestPinia({
      initialState: {
        likedPokemon: {
          likedPokemons: ['bulbasaur'],
        },
      },
    })

    const store = useLikedPokemonStore()

    expect(store.isLiked('bulbasaur')).toBe(true)
  })

  it('проверка отсутствия покемона в любимых с пустым массивом', () => {
    setupTestPinia({
      initialState: {
        likedPokemon: {
          likedPokemons: [],
        },
      },
    })

    const store = useLikedPokemonStore()

    expect(store.isLiked('bulbasaur')).toBe(false)
  })

  it('проверка отсутствия покемона в любимых с непустым массивом', () => {
    setupTestPinia({
      initialState: {
        likedPokemon: {
          likedPokemons: ['bulabaur'],
        },
      },
    })

    const store = useLikedPokemonStore()

    expect(store.isLiked('test')).toBe(false)
  })
})
