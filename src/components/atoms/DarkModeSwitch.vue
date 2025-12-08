<script setup lang="ts">
import { useDark } from '@vueuse/core'

import ToggleSwitch from 'primevue/toggleswitch'

const isDark = useDark({ disableTransition: false })
</script>

<template>
  <ToggleSwitch v-model="isDark" inputId="dark-mode">
    <template #handle="{ checked }">
      <i
        :class="['!text-xs iconify', { 'lucide--moon-star': checked, 'lucide--sun': !checked }]"
      />
    </template>
  </ToggleSwitch>
</template>
