<script setup lang="ts">
import { useDark } from '@vueuse/core'

import ToggleSwitch from 'primevue/toggleswitch'
import Panel from 'primevue/panel'
import FieldGroup from '@/components/molecules/FieldGroup.vue'
import Icon from '@/components/atoms/Icon.vue'

const isDark = useDark({ disableTransition: false })
</script>

<template>
  <Panel toggleable>
    <template #header>
      <div class="flex items-center gap-x-2">
        <Icon name="lucide--cog"></Icon>
        <span class="font-semibold">Quick Settings</span>
      </div>
    </template>

    <template #toggleicon="{ collapsed }">
      <Icon
        name="lucide--chevron-down"
        class="transition"
        :class="{
          'rotate-180': !collapsed,
        }"
      ></Icon>
    </template>

    <FieldGroup label="Dark Mode" inputId="dark-mode">
      <ToggleSwitch v-model="isDark" inputId="dark-mode">
        <template #handle="{ checked }">
          <i
            :class="['!text-xs iconify', { 'lucide--moon-star': checked, 'lucide--sun': !checked }]"
          />
        </template>
      </ToggleSwitch>
    </FieldGroup>
  </Panel>
</template>
