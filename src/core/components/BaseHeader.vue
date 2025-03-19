<script setup lang="ts"></script>
<template>
  <div class="wrapper">
    <RouterLink :to="{ name: 'pokemon' }">Pokemon</RouterLink>
  </div>
</template>

<style scoped>
.wrapper {
  padding: 10px;
  background: var(--color-background);
}
</style>
