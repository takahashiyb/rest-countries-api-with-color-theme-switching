<script setup>
import { ref, reactive, defineProps } from 'vue'

import ColorCard from '@/design-system/ColorCard.vue'
import TypographyCard from '@/design-system/TypographyCard.vue'
import SpacingCard from '@/design-system/SpacingCard.vue'

const props = defineProps({
  object: Object,
})

const colorGroup = reactive(props.object)

const title = ref(colorGroup.category)

function checkColor() {
  return title.value.toLowerCase() === 'colors'
}

function checkTypography() {
  return title.value.toLowerCase() === 'typography'
}

function checkSpacing() {
  return title.value.toLowerCase() === 'spacing'
}

const groups = reactive(colorGroup.groups)
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <ColorCard v-if="checkColor()" :groups="groups"></ColorCard>
    <TypographyCard v-else-if="checkTypography()" :groups="groups"></TypographyCard>
    <SpacingCard v-else-if="checkSpacing()" :groups="groups"></SpacingCard>
  </div>
</template>

<style scoped>
div {
  display: grid;

  max-width: 64em;

  margin-inline: auto;
  margin-bottom: 5em;
}

h1 {
  text-transform: capitalize;
  padding-top: 72px;
  padding-bottom: 72px;
}
</style>
