<script setup lang="ts">
import type { Country } from '@/assets/data/types'
import FilterButton from '@/components/FilterButton.vue'
import SearchBar from '@/components/SearchBar.vue'
import { onMounted, ref } from 'vue'

let typedData = ref<Country[]>([])

function loadData() {
  fetch('/data/data.json')
    .then((res) => res.json())
    .then((data) => {
      typedData.value = data
    })
}

onMounted(loadData)
</script>
<template>
  <main>
    <section class="querySection">
      <SearchBar />
      <FilterButton :data="typedData" />
    </section>
  </main>
</template>
<style scoped>
.querySection {
  display: grid;
  gap: var(--spacing-0100);
}

@media (min-width: 47.5em) {
  .querySection {
    grid-template-columns: 1fr 300px;
  }
}
</style>
<style>
.block {
  --background-color: var(--light-bg);
  --hover-bg-color: var(--light-hover-bg);
  --color: var(--light-clr);

  background-color: var(--background-color);
  color: var(--color);

  border-radius: 5px;
  box-shadow: 0.1em 0.1em 1em hsl(var(--black), 0.15);
}

.block.dark {
  --background-color: var(--dark-bg);
  --hover-bg-color: var(--dark-hover-bg);
  --color: var(--dark-clr);
}
</style>
