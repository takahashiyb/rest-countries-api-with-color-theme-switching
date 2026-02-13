<script lang="ts" setup>
import { useColorMode } from '@/stores/color-mode'

const color = useColorMode()

const props = defineProps<{
  data: {
    name: string
    population: number
    region: string
    capital: string
    svg: string
  }
}>()
</script>
<template>
  <div :class="color.mode" class="card__country block">
    <div class="container__flag">
      <img :src="props.data.svg" :alt="`${props.data.name}'s flag`" />
    </div>
    <div class="container__details">
      <h2>{{ props.data.name }}</h2>
      <p>
        <strong class="topic">Population:</strong><span>{{ props.data.population }}</span>
      </p>
      <p>
        <strong class="topic">Region:</strong><span>{{ props.data.region }}</span>
      </p>
      <p>
        <strong class="topic">Capital:</strong><span>{{ props.data.capital }}</span>
      </p>
    </div>
  </div>
</template>
<style scoped>
.card__country {
  width: 100%;
  max-width: 500px;

  display: grid;
  overflow: hidden;
}

img {
  width: 100%;
  height: 100%;

  object-fit: fill;
}

.container__details {
  padding: var(--spacing-0300);
}

strong {
  font: var(--font-preset-5l);
  font-weight: 600;
  margin-right: 0.5em;
}

span {
  font: var(--font-preset-5l);
}

@media (min-width: 47.5em) {
  .card__country {
    grid-template-rows: none;
  }
}

@media (min-width: 56.67em) {
  .card__country {
    grid-template-rows: 1fr 1fr;
  }
}

@media (min-width: 75em) {
  .card__country {
    grid-template-rows: none;
  }
}

@media (min-width: 125em) {
  .card__country {
    grid-template-rows: 1fr 1fr;
  }
}
</style>
