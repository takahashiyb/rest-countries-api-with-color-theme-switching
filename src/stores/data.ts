import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Country } from '@/assets/data/types'

export const useStoreData = defineStore('data', () => {
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

  function filterResults(newSearch: string, newFilter: string) {
    resultsData.value = typedData.value

    resultsData.value = newFilter
      ? resultsData.value.filter((item) => item.region === newFilter)
      : resultsData.value

    resultsData.value = resultsData.value.filter((item) =>
      item.name.toLowerCase().includes(newSearch),
    )
  }

  return { resultsData, loadData, filterResults }
})
