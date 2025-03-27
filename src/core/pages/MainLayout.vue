<script setup lang="ts">
import BaseHeader from '@/core/components/BaseHeader.vue'
</script>

<template>
  <header class="pageHeader">
    <BaseHeader />
  </header>
  <main class="content">
    <RouterView v-slot="{ Component }">
      <KeepAlive :include="['PokemonPage']">
        <component :is="Component" />
      </KeepAlive>
    </RouterView>
  </main>
</template>

<style scoped>
:global(#app) {
  display: flex;
  flex-direction: column;
}
.pageHeader {
  position: sticky;
  top: 0;
  z-index: 1;
}
.content {
  padding: 10px;
  flex-grow: 1;
}
</style>
