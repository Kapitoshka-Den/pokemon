<script setup lang="ts">
import type { PokemonStats } from '@/modules/pokemon/models/PokemonStats'
import { StatColors } from '@/modules/pokemon/types/StatColors'
import { computed } from 'vue'

const {
  name = '',
  stats = [],
  species = '',
} = defineProps<{
  name?: string
  id: number
  stats?: PokemonStats[]
  species?: string
}>()

const fullName = computed(() => {
  if (species === name) return name
  return `${species} - ${name}`
})

const statView = (value: PokemonStats) => {
  return `${value.stat.name}: ${value.baseStat}`
}
</script>

<template>
  <div class="wrapper">
    <div class="imageWrapper">
      <img
        class="photo"
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      />
      <h1>{{ fullName }}</h1>
    </div>
    <div
      v-for="(stat, index) in stats"
      :key="index"
      class="stat"
      :style="{ color: StatColors[stat.stat.name] }"
    >
      {{ statView(stat) }}
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  border: 2px solid var(--color-border);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
  height: min-content;
}
.imageWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.imageWrapper .photo {
  width: 300px;
  min-height: 300px;
}

.stat {
  font-size: 16px;
  text-transform: uppercase;
}
</style>
