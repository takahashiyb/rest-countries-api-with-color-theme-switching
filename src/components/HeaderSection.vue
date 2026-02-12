<script lang="ts" setup>
import { useColorMode } from '@/stores/color-mode'

const color = useColorMode()
</script>
<template>
  <header :class="color.mode">
    <h1><slot></slot></h1>
    <div v-if="color.mode === 'dark'" @click="color.switchMode('light')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <!-- !Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. -->
        <path
          fill="#ffffff"
          d="M320 32C328.4 32 336.3 36.4 340.6 43.7L396.1 136.3L500.9 110C509.1 108 517.8 110.4 523.7 116.3C529.6 122.2 532 131 530 139.1L503.7 243.8L596.4 299.3C603.6 303.6 608.1 311.5 608.1 319.9C608.1 328.3 603.7 336.2 596.4 340.5L503.7 396.1L530 500.8C532 509 529.6 517.7 523.7 523.6C517.8 529.5 509 532 500.9 530L396.2 503.7L340.7 596.4C336.4 603.6 328.5 608.1 320.1 608.1C311.7 608.1 303.8 603.7 299.5 596.4L243.9 503.7L139.2 530C131 532 122.4 529.6 116.4 523.7C110.4 517.8 108 509 110 500.8L136.2 396.1L43.6 340.6C36.4 336.2 32 328.4 32 320C32 311.6 36.4 303.7 43.7 299.4L136.3 243.9L110 139.1C108 130.9 110.3 122.3 116.3 116.3C122.3 110.3 131 108 139.2 110L243.9 136.2L299.4 43.6L301.2 41C305.7 35.3 312.6 31.9 320 31.9zM320 176C240.5 176 176 240.5 176 320C176 399.5 240.5 464 320 464C399.5 464 464 399.5 464 320C464 240.5 399.5 176 320 176zM320 416C267 416 224 373 224 320C224 267 267 224 320 224C373 224 416 267 416 320C416 373 373 416 320 416z"
        />
      </svg>
      <span>Dark Mode</span>
    </div>
    <div v-if="color.mode === 'light'" @click="color.switchMode('dark')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
        <!-- !Font Awesome Free 7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. -->
        <path
          d="M303.3 112.7C196.2 121.2 112 210.8 112 320C112 434.9 205.1 528 320 528C353.3 528 384.7 520.2 412.6 506.3C309.2 482.9 232 390.5 232 280C232 214.2 259.4 154.9 303.3 112.7zM64 320C64 178.6 178.6 64 320 64C339.4 64 358.4 66.2 376.7 70.3C386.6 72.5 394 80.8 395.2 90.8C396.4 100.8 391.2 110.6 382.1 115.2C321.5 145.4 280 207.9 280 280C280 381.6 362.4 464 464 464C469 464 473.9 463.8 478.8 463.4C488.9 462.6 498.4 468.2 502.6 477.5C506.8 486.8 504.6 497.6 497.3 504.6C451.3 548.8 388.8 576 320 576C178.6 576 64 461.4 64 320z"
        />
      </svg>
      <span>Light Mode</span>
    </div>
  </header>
</template>
<style scoped>
header {
  --mode-background-color: var(--light-bg);
  --mode-color: var(--light-clr);

  display: flex;

  background-color: var(--mode-background-color);
  color: var(--mode-color);

  padding-top: var(--spacing-0200);
  padding-inline: var(--spacing-0400);
  padding-bottom: var(--spacing-0200);

  box-shadow: 0.1em 0.1em 1em hsl(var(--black), 0.15);
}

header.dark {
  --mode-background-color: var(--dark-bg);
  --mode-color: var(--dark-clr);
}

span {
  white-space: nowrap;

  font: var(--font-preset-6sb);
}

h1 {
  flex: 1;
}

div {
  display: flex;
  align-items: center;
  gap: var(--spacing-0100);

  cursor: pointer;
}

svg {
  height: 20px;
}

@media (min-width: 47.5em) {
  header {
    padding-top: var(--spacing-0400);
    padding-inline: var(--spacing-0500);
    padding-bottom: var(--spacing-0400);
  }
}

@media (min-width: 56.67em) {
  header {
    padding-top: var(--spacing-0300);
    padding-inline: var(--spacing-1000);
    padding-bottom: var(--spacing-0300);
  }

  span {
    font: var(--font-preset-4sb);
  }
}
</style>
