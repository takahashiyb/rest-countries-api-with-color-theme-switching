import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useColorMode = defineStore('color-mode', () => {
  const mode = ref<string>('light')

  function switchMode(newMode: string) {
    mode.value = newMode
    switchHtmlColor(newMode)
  }

  function switchHtmlColor(newMode: string) {
    const classHtml = document.querySelector('html')?.classList

    if (newMode === 'dark' && classHtml) {
      classHtml.add('dark')
    }
    if (newMode !== 'dark' && classHtml) {
      classHtml.remove('dark')
    }
  }

  return { mode, switchMode }
})
