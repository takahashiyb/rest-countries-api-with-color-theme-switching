<script setup lang="ts">
import ReturnButton from '@/components/ReturnButton.vue'
import { useRoute } from 'vue-router'
import { useStoreData } from '@/stores/data'
import { useColorMode } from '@/stores/color-mode'

const route = useRoute()

const data = useStoreData()

const color = useColorMode()

const country = route.query.name as string
</script>

<template>
  <main>
    <div class="return">
      <ReturnButton />
    </div>
    <div class="container__country" v-if="data.isReady">
      <div class="container__flag">
        <img :src="data.findCountry(country).flag" alt="" />
      </div>
      <div>
        <h1 class="details">{{ data.findCountry(country).name }}</h1>
        <div class="container__detail">
          <div class="details">
            <p>
              <strong>Native Name:</strong><span>{{ data.findCountry(country).nativeName }}</span>
            </p>
            <p>
              <strong>Population:</strong><span>{{ data.findCountry(country).population }}</span>
            </p>
            <p>
              <strong>Region:</strong><span>{{ data.findCountry(country).region }}</span>
            </p>
            <p>
              <strong>Subregion:</strong><span>{{ data.findCountry(country).subregion }}</span>
            </p>
            <p>
              <strong>Capital:</strong><span>{{ data.findCountry(country).capital }}</span>
            </p>
          </div>
          <div class="details">
            <p>
              <strong>Top Level Domain:</strong
              ><span>{{ data.findCountry(country).topLevelDomain.toString() }}</span>
            </p>

            <p>
              <strong>Currencies:</strong
              ><span>{{
                data
                  .findCountry(country)
                  .currencies?.map((item) => item.name)
                  .toString()
              }}</span>
            </p>

            <p>
              <strong>Languages:</strong
              ><span>{{
                data
                  .findCountry(country)
                  .languages.map((item) => item.name)
                  .toString()
              }}</span>
            </p>
          </div>
        </div>
        <div class="border">
          <p class="border-title details"><strong>Bordering Countries:</strong></p>
          <div class="container__border">
            <p
              class="border-list block"
              :class="color.mode"
              v-for="border in data.findCountry(country).borders"
            >
              {{ border }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  padding-inline: var(--spacing-0300);
  padding-bottom: var(--spacing-0800);
}
.container__country {
  display: grid;
}

img {
  width: 100%;

  border-radius: 5px;

  margin-top: var(--spacing-0600);
  margin-bottom: var(--spacing-0600);
}

h1 {
  font: var(--font-preset-2);
}

.container__detail {
  display: grid;
  gap: var(--spacing-0400);
}

.details {
  color: var(--color);
}

p {
  font: var(--font-preset-5l);
}

strong {
  font-weight: 600;
  margin-right: 0.5em;
}

.border {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-0200);
}

.border-title {
  font: var(--font-preset-6sb);
}

.container__border {
  display: flex;
  gap: var(--spacing-0200);
  place-content: center;
  flex-wrap: wrap;
}

.border-list {
  font: var(--font-preset-6l);
  flex: 0 1 1;
  min-width: 96px;
  text-align: center;

  padding: 0.5em;
  margin: 0;
}

@media (min-width: 47.5em) {
  main {
    max-width: 560px;
    margin-inline: auto;
  }

  .container__detail {
    grid-template-columns: repeat(2, 1fr);
  }

  .border {
    flex-direction: row;
    align-items: baseline;
    white-space: nowrap;
  }
}

@media (min-width: 56.67em) {
  .return {
    margin-bottom: var(--spacing-1000);
  }

  main {
    max-width: 1250px;
  }

  .container__country {
    grid-template-columns: repeat(2, 1fr);
    place-content: start;
    place-items: center;
    gap: var(--spacing-1000);
  }

  img {
    margin: 0;
  }
}
</style>
