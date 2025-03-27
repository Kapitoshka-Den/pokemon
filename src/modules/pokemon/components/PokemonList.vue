<script setup lang="ts">
import type { BaseResponseModel } from '@/core/types/response'
import { getId } from '@/core/utils/getId'
import PokemonCard from '@/modules/pokemon/components/PokemonCard.vue'

defineEmits(['loadMore'])
const props = defineProps<{ data: BaseResponseModel[]; isHidden: boolean }>()
</script>

<template>
  <div class="wrapper">
    <div class="list">
      <div v-for="(item, index) in props.data" :key="index">
        <PokemonCard :name="item.name" :id="getId(item.url)" />
      </div>
    </div>
  </div>
  <button class="more" v-if="isHidden" @click="$emit('loadMore')">More pokemons</button>
</template>

<style scoped>
.wrapper {
  container: list / inline-size;
  width: 100%;
}

.list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  gap: 10px;
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

@media (any-hover: hover) {
  .more:hover {
    background: rgba(var(--vt-primary), 0.1);
  }
}

@media screen and (max-width: 768px) and (min-width: 480px) {
  .list {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
}

@container list (max-width: 480px) {
  .list {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
}
</style>
