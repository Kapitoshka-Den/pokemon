<script setup lang="ts">
import BaseLoader from '@/core/components/BaseLoader.vue'
import { useFetchData } from '@/core/composables/useFetchData'
import type { BaseResponseModel, ManyResponse } from '@/core/types/response'
import type { Url } from '@/core/types/url'
import PokemonList from '@/modules/pokemon/components/PokemonList.vue'
import { computed, ref, watch, watchEffect } from 'vue'

const url = ref<Url>('https://pokeapi.co/api/v2/pokemon?limit=24')
const pokemons = ref<BaseResponseModel[]>([])
const { data, error, isError, isLoading } = useFetchData<ManyResponse>(url)

const pokemonsEmpty = computed(() => pokemons.value?.length === 0)

watchEffect(() => {
  pokemons.value = [...(pokemons.value ?? []), ...(data?.value?.results ?? [])]
})

watch(error, () => {
  console.error(error.value)
})

const changeUrl = (value: Url | null) => {
  if (value === null) return
  url.value = value
}
</script>
<template>
  <div class="wrapper">
    <template v-if="!pokemonsEmpty">
      <PokemonList
        :data="pokemons"
        :is-hidden="data?.next !== null && !isLoading"
        v-on:load-more="changeUrl(data!.next)"
      />
    </template>
    <BaseLoader v-if="isLoading" />
    <div v-else-if="isError">
      <div>Something went wrong</div>
    </div>
    <div v-else-if="pokemonsEmpty">
      <div>No data</div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 10px;
}
.more {
  background: transparent;
  padding: 10px;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 30px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}
.more:hover {
  background: rgba(var(--vt-primary), 0.1);
}
</style>
