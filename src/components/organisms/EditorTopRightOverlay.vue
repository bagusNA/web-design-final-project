<script setup lang="ts">
import Button from 'primevue/button'
import Popover from 'primevue/popover'
import { useTemplateRef } from 'vue'
import ToggleSwitch from 'primevue/toggleswitch'
import FieldGroup from '@/components/molecules/FieldGroup.vue'
import { useDark } from '@vueuse/core'
import Icon from '@/components/atoms/Icon.vue'

const isDark = useDark({ disableTransition: false })

const overlay = useTemplateRef<typeof Popover>('overlay')

function toggle(e: Event) {
  overlay.value?.toggle(e)
}
</script>

<template>
  <div class="absolute top-0 right-0 px-4 py-3">
    <Button @click="toggle" severity="secondary" class="shadow">
      <Icon name="lucide--cog" class="py-3 transition" :class="{ '-rotate-45': overlay?.visible }"></Icon>
    </Button>

    <Popover ref="overlay">
      <FieldGroup label="Dark Mode" inputId="dark-mode">
        <ToggleSwitch v-model="isDark" inputId="dark-mode">
          <template #handle="{ checked }">
            <i
              :class="['!text-xs iconify', { 'lucide--moon-star': checked, 'lucide--sun': !checked }]"
            />
          </template>
        </ToggleSwitch>
      </FieldGroup>
    </Popover>
  </div>
</template>
