<template>
  <div class="loader"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #fd5353;
  border-radius: 50%;
  border-bottom-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
