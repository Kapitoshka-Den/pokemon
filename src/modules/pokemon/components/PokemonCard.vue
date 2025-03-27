<script setup lang="ts">
import BaseLike from '@/core/components/BaseLike.vue'
import { useLikedPokemonStore } from '@/modules/pokemon/store/store'

type Props = {
  name: string
  id: string
}

const props = defineProps<Props>()

const state = useLikedPokemonStore()
const { addLikedPokemons, removeLikedPokemons } = state
</script>

<template>
  <RouterLink :to="{ name: 'pokemon-details', params: { id: props.id } }" class="wrapper">
    <img
      class="image"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
    />
    <div class="name">
      <span>{{ props.name }}</span>
      <BaseLike
        :is-like="state.isLiked(props.id)"
        @like="addLikedPokemons(props.id)"
        @unlike="removeLikedPokemons(props.id)"
      />
    </div>
  </RouterLink>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  color: var(--color-text);
  transition: border 0.3s;
}
.wrapper:hover {
  border-color: red;
}

.image {
  max-height: 300px;
  width: 100%;
}
.name {
  display: flex;
}
</style>
