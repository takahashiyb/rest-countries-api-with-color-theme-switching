<script setup lang="ts">
import '@/assets/styles/main.css'
import { onMounted } from 'vue'
import HeaderSection from './components/HeaderSection.vue'
import { useStoreData } from './stores/data'

const data = useStoreData()

onMounted(data.loadData)
</script>

<template>
  <HeaderSection>Where in the world?</HeaderSection>
  <RouterView></RouterView>
</template>

<style scoped>
.dark {
  background-color: hsl(var(--blue-950));
}
</style>
