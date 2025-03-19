<script setup lang="ts">
import type { BaseResponseModel } from '@/core/types/response'
import { getId } from '@/core/utils/getId'
import PokemonCard from '@/modules/pokemon/components/PokemonCard.vue'

const props = defineProps<{ data: BaseResponseModel[] }>()
</script>

<template>
  <div class="list">
    <div v-for="(item, index) in props.data" :key="index">
      <PokemonCard :name="item.name" :id="getId(item.url)" />
    </div>
  </div>
</template>

<style scoped>
.list {
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 10px;
  padding: 10px;
}
</style>
