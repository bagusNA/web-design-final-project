<script setup lang="ts">
import { useTemplateRef } from 'vue'

import Button from 'primevue/button'
import Popover from 'primevue/popover'
import DarkModeSwitch from '@/components/atoms/DarkModeSwitch.vue'
import FieldGroup from '@/components/molecules/FieldGroup.vue'
import Icon from '@/components/atoms/Icon.vue'

const overlay = useTemplateRef<typeof Popover>('overlay')

function toggle(e: Event) {
  overlay.value?.toggle(e)
}
</script>

<template>
  <div class="absolute top-0 right-0 px-4 py-3">
    <Button @click="toggle" severity="secondary" class="shadow">
      <Icon
        name="lucide--cog"
        class="py-3 transition"
        :class="{ '-rotate-45': overlay?.visible }"
      ></Icon>
    </Button>

    <Popover ref="overlay" class="min-w-48">
      <div class="space-y-2">
        <FieldGroup label="Dark Mode" inputId="dark-mode">
          <DarkModeSwitch />
        </FieldGroup>

        <RouterLink :to="{ name: 'app.settings' }">
          <Button severity="secondary" label="Settings" size="small" fluid />
        </RouterLink>
      </div>
    </Popover>
  </div>
</template>
