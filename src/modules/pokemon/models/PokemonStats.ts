import type { StatColorsProperties } from '@/modules/pokemon/types/StatColors'

export type PokemonStats = {
  baseStat: number
  stat: {
    name: StatColorsProperties
  }
}
