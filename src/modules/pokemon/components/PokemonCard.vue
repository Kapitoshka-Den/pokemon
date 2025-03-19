<script setup lang="ts">
type Props = {
  name: string
  id: string
}

const props = defineProps<Props>()
</script>

<template>
  <RouterLink :to="{ name: 'pokemon-details', params: { id: props.id } }" class="wrapper">
    <img
      class="image"
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
    />
    <span>{{ props.name }}</span>
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
</style>
