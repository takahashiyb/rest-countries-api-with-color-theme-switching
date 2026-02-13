<script setup lang="ts">
import { useColorMode } from '@/stores/color-mode'

const color = useColorMode()
</script>
<template>
  <div :class="color.mode" class="block">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
      <!-- !Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. -->
      <path
        fill="#C4C4C4"
        d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
      />
    </svg>
    <input type="text" placeholder="Search for a country..." />
  </div>
</template>
<style scoped>
div {
  --placeholder-color: hsl(var(--grey-250));

  display: flex;
  gap: var(--spacing-0300);

  height: var(--spacing-0200);

  padding-top: var(--spacing-0200);
  padding-inline: var(--spacing-0400);
  padding-bottom: var(--spacing-0200);
}

.block.dark {
  --placeholder-color: var(--dark-clr);
}

input {
  flex: 1;

  background-color: var(--background-color);
  font: var(--font-preset-6r);

  border: none;
  outline: none;
}

path {
  fill: var(--placeholder-color);
}

div:has(input:focus-visible) path {
  fill: var(--color);
}

input::placeholder {
  color: var(--placeholder-color);
}

input:not(:placeholder-shown) {
  color: var(--color);
}

@media (min-width: 47.5em) {
  div {
    padding-top: var(--spacing-0400);
    padding-inline: var(--spacing-0200);
    padding-bottom: var(--spacing-0400);
  }

  input {
    color: hsl(var(--grey-400));
    font: var(--font-preset-5r);
  }
}
</style>
