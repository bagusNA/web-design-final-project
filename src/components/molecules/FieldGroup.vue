<script setup lang="ts">
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import Icon from '@/components/atoms/Icon.vue'

export interface LabelInputGroupProps {
  label?: string
  icon?: string | null
  inputId?: string
}

defineProps<LabelInputGroupProps>()
</script>

<template>
  <div class="flex flex-col gap-y-1 text-sm">
    <slot name="label">
      <label :for="inputId" class="font-medium">{{ label }}</label>
    </slot>

    <InputGroup>
      <InputGroupAddon v-if="icon">
        <Icon :name="icon"></Icon>
      </InputGroupAddon>

      <slot />
    </InputGroup>
  </div>
</template>
