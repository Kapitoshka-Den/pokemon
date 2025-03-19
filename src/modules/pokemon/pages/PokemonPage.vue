<script setup lang="ts">
import BaseLoader from '@/core/components/BaseLoader.vue'
import { useFetchData } from '@/core/composables/useFetchData'
import type { ManyResponse } from '@/core/types/response'
import PokemonList from '@/modules/pokemon/components/PokemonList.vue'
import { watchEffect } from 'vue'

const { data, error, isError, isLoading } = useFetchData<ManyResponse>(
  'https://pokeapi.co/api/v2/pokemon',
)
watchEffect(() => {
  console.log(error)
})
</script>
<template>
  <div></div>
  <BaseLoader v-if="isLoading" />
  <div v-else-if="isError">
    <div>Something went wrong</div>
  </div>
  <div v-else-if="data === null">
    <div>No data</div>
  </div>
  <div v-else>
    <PokemonList :data="data.results" />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
