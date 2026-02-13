import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFilterDropdown = defineStore('dropdown', () => {
  const isDropdownOpen = ref<boolean>(false)

  function openDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value
  }
  return { isDropdownOpen, openDropdown }
})
