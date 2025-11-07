<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  isLike: {
    type: Boolean,
  },
})
const isAnimated = ref(false)

const emit = defineEmits(['like', 'unlike'])

const classes = computed(() => {
  return [
    {
      like: props.isLike,
      unlike: !props.isLike,
      animated: isAnimated.value,
    },
    'icon',
  ]
})

const toggleLike = () => {
  isAnimated.value = true
  if (props.isLike) {
    emit('unlike')
  } else {
    emit('like')
  }
}
</script>
<template>
  <button class="button" @click.prevent="toggleLike" @animationend="isAnimated = false">
    <div v-if="true" class="iconWrapper">
      <svg
        width="56"
        height="55"
        viewBox="0 0 56 55"
        :class="classes"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.66675 19.2502C4.66617 15.928 6.02565 12.7452 8.43931 10.4177C10.853 8.09023 14.1181 6.81365 17.5001 6.87517C21.5072 6.85427 25.3307 8.52328 28.0001 11.4585C30.6694 8.52328 34.493 6.85427 38.5001 6.87517C41.8821 6.81365 45.1472 8.09023 47.5609 10.4177C49.9745 12.7452 51.334 15.928 51.3334 19.2502C51.3334 31.5243 36.4491 40.7918 28.0001 48.1252C19.5697 40.73 4.66675 31.5335 4.66675 19.2502Z"
          stroke-width="2"
        />
      </svg>
    </div>
  </button>
</template>

<style scoped>
.button {
  background: none;
  border: none;
  cursor: pointer;
}
.iconWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
}

.iconWrapper svg {
  transition: all 0.3s;
}

.icon {
  stroke: '#000000';
}

@media screen and (prefers-color-scheme: dark) {
  .icon {
    stroke: #fff;
  }
}

.like {
  fill: red;
  stroke: none;
}

.unlike {
  fill: var(--color-background);
}

.animated {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
