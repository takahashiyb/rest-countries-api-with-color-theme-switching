<script lang="ts" setup>
import { computed } from 'vue'
import type { Country } from '@/assets/data/types'
import { useColorMode } from '@/stores/color-mode'
import { useFilterDropdown } from '@/stores/filter'
import FilterDropdown from './FilterDropdown.vue'

const color = useColorMode()
const dropdown = useFilterDropdown()

const props = defineProps<{
  data: Country[]
}>()

const regions = computed(() => {
  return [...new Set(props.data.map((country) => country.region))]
})
</script>
<template>
  <div :class="color.mode" class="placeholder block" @click="dropdown.openDropdown()">
    <span>Filter by Region</span>
    <svg viewBox="0 0 32 32">
      <path d="M9.914 11.086l-2.829 2.829 8.914 8.914 8.914-8.914-2.828-2.828-6.086 6.086z"></path>
    </svg>
    <FilterDropdown :data="regions" />
  </div>
</template>
<style scoped>
div {
  display: flex;
  align-items: center;
  gap: var(--spacing-0700);

  padding-top: var(--spacing-0200);
  padding-inline: var(--spacing-0300);
  padding-bottom: var(--spacing-0200);
}

.placeholder {
  position: relative;
}

div.dark {
  fill: var(--dark-clr);
}

.placeholder span {
  font: var(--font-preset-6r);
}

svg {
  height: 0.75rem;
}
</style>
