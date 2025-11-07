<script setup lang="ts">
import BaseLike from '@/core/components/BaseLike.vue'
import BaseLoader from '@/core/components/BaseLoader.vue'
import { useFetchData } from '@/core/composables/useFetchData'
import PokemonShortInfo from '@/modules/pokemon/components/PokemonShortInfo.vue'
import type { PokemonDetails } from '@/modules/pokemon/models/PokemonDetails'
import { getPokemonDescription } from '@/modules/pokemon/services/getPokemonDescription'
import { useLikedPokemonStore } from '@/modules/pokemon/store/store'
import { onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import Markdown from 'vue3-markdown-it'

const { params } = useRoute('pokemon-details')
const { data, isLoading } = useFetchData<PokemonDetails>(
  `https://pokeapi.co/api/v2/pokemon/${params.id}`,
)

const state = useLikedPokemonStore()
const { addLikedPokemons, removeLikedPokemons } = state

const {
  data: description,
  isLoading: isLoadingDescription,
  abortController,
} = getPokemonDescription(params.id ?? '')

onUnmounted(() => abortController.abort())
</script>

<template>
  <div v-if="isLoading" class="loaderWrapper">
    <BaseLoader />
  </div>
  <div v-else class="wrapper">
    <PokemonShortInfo
      v-if="data"
      :name="data.name"
      :id="data.id"
      :stats="data.stats"
      :species="data.species?.name"
    />
    <div class="content">
      <BaseLike
        :is-like="state.isLiked(params.id)"
        @like="addLikedPokemons(params.id)"
        @unlike="removeLikedPokemons(params.id)"
      />
      <template v-if="isLoadingDescription">
        <BaseLoader />
      </template>
      <template v-else>
        <Markdown :source="description" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.loaderWrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  display: flex;
  gap: 10px;
}

.content {
  flex: 1;
}
</style>
