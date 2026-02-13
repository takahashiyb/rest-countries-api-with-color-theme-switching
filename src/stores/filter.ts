import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFilterDropdown = defineStore('dropdown', () => {
  const isDropdownOpen = ref<boolean>(false)

  function openDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value
  }
  return { isDropdownOpen, openDropdown }
})

export const useFilterResult = defineStore('filter', () => {
  const isRegionFilter = ref<string>('')

  const queryRegion = computed(() => {
    return isRegionFilter.value.trim()
  })

  const inputSearch = ref<string>('')

  const querySearch = computed(() => {
    return inputSearch.value.trim().toLowerCase()
  })

  function changeRegionFilter(region: string) {
    if (isRegionFilter.value === region) {
      isRegionFilter.value = ''
    } else {
      isRegionFilter.value = region
    }
  }
  return { isRegionFilter, queryRegion, inputSearch, querySearch, changeRegionFilter }
})
