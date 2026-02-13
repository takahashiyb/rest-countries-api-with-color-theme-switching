<script setup lang="ts">
import '@/assets/styles/main.css'
import { onMounted } from 'vue'
import HeaderSection from './components/HeaderSection.vue'
import { useColorMode } from './stores/color-mode'
import { useStoreData } from './stores/data'

const color = useColorMode()
const data = useStoreData()

onMounted(data.loadData)
</script>

<template>
  <div :class="color.mode">
    <HeaderSection>Where in the world?</HeaderSection>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.dark {
  background-color: hsl(var(--blue-950));
}
</style>
