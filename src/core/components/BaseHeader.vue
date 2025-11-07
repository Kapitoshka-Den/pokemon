<script setup lang="ts"></script>
<template>
  <div class="wrapper">
    <RouterLink :to="{ name: 'pokemon' }">
      <img
        class="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png"
      />
    </RouterLink>
    <RouterLink class="link" exact-active-class="active-link" :to="{ name: 'pokemon' }">
      Pokemon
    </RouterLink>
  </div>
</template>

<style scoped>
.logo {
  height: 30px;
}
.wrapper {
  padding: 10px;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  gap: 10px;
}

.link {
  color: var(--vt-white);
  text-decoration: none;
  font-size: 1.3rem;
  transition: 0.3s;
}

.active-link {
  color: #ffbf00;
  text-decoration: none;
  font-size: 1.3rem;
}

.link:hover {
  opacity: 0.7;
}
</style>
