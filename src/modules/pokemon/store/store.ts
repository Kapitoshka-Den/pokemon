import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLikedPokemonStore = defineStore('likedPokemon', () => {
  const likedPokemons = ref<string[]>([])

  const addLikedPokemons = (...pokemonsArgs: string[]) => likedPokemons.value.push(...pokemonsArgs)

  const removeLikedPokemons = (...pokemonsArgs: string[]) => {
    const filteredPokemons = likedPokemons.value.filter(
      (pokemon) => !pokemonsArgs.includes(pokemon),
    )
    likedPokemons.value = filteredPokemons
  }

  const isLiked = (pokemonId: string) => likedPokemons.value.includes(pokemonId)

  return {
    likedPokemons,
    isLiked,
    addLikedPokemons,
    removeLikedPokemons,
  }
})
