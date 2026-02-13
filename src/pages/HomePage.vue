<script setup lang="ts">
import type { Country } from '@/assets/data/types'
import FilterButton from '@/components/FilterButton.vue'
import SearchBar from '@/components/SearchBar.vue'
import { onMounted, ref, watch } from 'vue'
import { useFilterResult } from '@/stores/filter'
import CountryCard from '@/components/CountryCard.vue'

const filter = useFilterResult()

let typedData = ref<Country[]>([])

let resultsData = ref(typedData.value)

function loadData() {
  fetch('/data/data.json')
    .then((res) => res.json())
    .then((data) => {
      typedData.value = data
      resultsData.value = data
    })
}

onMounted(loadData)

watch([() => filter.querySearch, () => filter.queryRegion], ([newSearch, newFilter]) => {
  resultsData.value = typedData.value

  resultsData.value = newFilter
    ? resultsData.value.filter((item) => item.region === newFilter)
    : resultsData.value

  resultsData.value = resultsData.value.filter((item) =>
    item.name.toLowerCase().includes(newSearch),
  )
})

interface CountryCardProps {
  name: string
  population: number
  region: string
  capital: string
  svg: string
}

function convertCountryCardProps(country: Country): CountryCardProps {
  return {
    name: country.name,
    population: country.population,
    region: country.region,
    capital: country.capital || 'N/A',
    svg: country.flags.png,
  }
}
</script>
<template>
  <main>
    <section class="querySection">
      <SearchBar />
      <FilterButton :data="typedData" />
    </section>
    <section class="resultSection">
      <CountryCard v-for="country in resultsData" :data="convertCountryCardProps(country)" />
    </section>
  </main>
</template>
<style scoped>
.querySection {
  display: grid;
  gap: var(--spacing-0100);

  position: sticky;
  top: 20px;

  padding-inline: var(--spacing-0300);

  margin-bottom: var(--spacing-0400);
}

.resultSection {
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: var(--spacing-0500);

  padding-inline: var(--spacing-0700);
}

@media (min-width: 47.5em) {
  .querySection {
    grid-template-columns: 1fr 300px;

    padding-inline: var(--spacing-0500);
  }

  .resultSection {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-0900);

    padding-inline: var(--spacing-1000);
  }
}
@media (min-width: 75em) {
  .resultSection {
    grid-template-columns: repeat(4, 1fr);
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
