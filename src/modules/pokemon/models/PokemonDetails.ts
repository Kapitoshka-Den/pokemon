import type { PokemonSpecies, PokemonStats, PokemonType } from '@/modules/pokemon/models'

export type PokemonDetails = {
  id: number
  name: string
  height: number
  weight: number
  stats: PokemonStats[]
  types: PokemonType[]
  species: PokemonSpecies
}
