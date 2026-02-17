<script lang="ts" setup>
import { useColorMode } from '@/stores/color-mode'

const color = useColorMode()
</script>
<template>
  <router-link to="/">
    <div :class="color.mode" class="block">
      <svg viewBox="0 0 32 32">
        <path
          d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"
        ></path>
      </svg>
      <span>Back</span>
    </div>
  </router-link>
</template>
<style scoped>
div {
  height: var(--spacing-0500);
  width: 104px;

  display: flex;
  align-items: center;
  gap: var(--spacing-0100);

  padding-top: var(--spacing-0100);
  padding-inline: var(--spacing-0400);
  padding-bottom: var(--spacing-0100);
}

svg {
  height: 1rem;
  fill: var(--color);
}

span {
  font: var(--font-preset-4l);
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
