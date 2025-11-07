import { ref } from 'vue'
import { defineStore } from 'pinia'

export type PokemonId = string | number

export const useLikedPokemonStore = defineStore('likedPokemon', () => {
  const likedPokemons = ref<PokemonId[]>([])

  const addLikedPokemons = (...pokemonsArgs: PokemonId[]) => likedPokemons.value.push(...pokemonsArgs)

  const removeLikedPokemons = (...pokemonsArgs: PokemonId[]) => {
    const filteredPokemons = likedPokemons.value.filter(
      (pokemon) => !pokemonsArgs.includes(pokemon),
    )
    likedPokemons.value = filteredPokemons
  }

  const isLiked = (pokemonId: PokemonId) => likedPokemons.value.includes(pokemonId)

  return {
    likedPokemons,
    isLiked,
    addLikedPokemons,
    removeLikedPokemons,
  }
})
