<script setup lang="ts">
import '@/assets/styles/main.css'
import HeaderSection from './components/HeaderSection.vue'
</script>

<template>
  <HeaderSection>Where in the world?</HeaderSection>
  <RouterView></RouterView>
</template>

<style scoped></style>

<style>
h1 {
  font: var(--font-preset-6sb);
  font-weight: 800;
}

@media (min-width: 47.5em) {
}

@media (min-width: 56.67em) {
  h1 {
    font: var(--font-preset-2);
  }
}
</style>
