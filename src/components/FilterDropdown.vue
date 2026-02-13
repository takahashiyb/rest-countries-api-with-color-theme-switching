<script lang="ts" setup>
import { useColorMode } from '@/stores/color-mode'
import { useFilterDropdown, useFilterResult } from '@/stores/filter'

const color = useColorMode()
const dropdown = useFilterDropdown()
const filter = useFilterResult()

const props = defineProps<{
  data: string[]
}>()
</script>
<template>
  <div v-if="dropdown.isDropdownOpen" :class="color.mode" class="block dropdown">
    <ul>
      <li v-for="region in props.data" @click="filter.changeRegionFilter(region)">{{ region }}</li>
    </ul>
  </div>
</template>
<style scoped>
.dropdown {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-0100);

  width: calc(100% - 48px);

  position: absolute;
  top: 55px;
  left: 0px;

  padding-top: var(--spacing-0200);
  padding-inline: var(--spacing-0300);
  padding-bottom: var(--spacing-0200);
}

ul {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0100);

  list-style-type: none;
  list-style-position: outside;

  padding: 0;
}

li {
  padding-top: 0.5em;
}

li:hover {
  background-color: var(--hover-bg-color);
}

@media (min-width: 47.5em) {
  .dropdown {
    width: 252px;

    top: 90px;
    left: 0px;
  }

  ul {
    width: 100%;
  }
}
</style>
