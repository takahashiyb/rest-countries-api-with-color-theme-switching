import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useColorMode = defineStore('color-mode', () => {
  const mode = ref<string>('light')

  function switchMode(newMode: string) {
    mode.value = newMode
  }
  return { mode, switchMode }
})
32 16