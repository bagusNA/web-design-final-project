<script setup lang="ts">
import { useTemplateRef } from 'vue'
import { useSortable } from '@vueuse/integrations/useSortable'

import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Icon from '@/components/atoms/Icon.vue'

export interface MultipleInputTextProps {
  label?: string
  placeholder?: string
  inputId?: string
}

defineProps<MultipleInputTextProps>()

const model = defineModel<string[]>({ required: true })

function add(e: KeyboardEvent): void {
  model.value.push('')
}

function remove(index: number): void {
  model.value.splice(index, 1)
}

function checkEmpty(index: number): void {
  if (model.value[index]?.trim() || model.value.length === 1) return

  remove(index)
}

// --- Sorting ---
const listEl = useTemplateRef('listEl')
useSortable(listEl, model.value, {
  handle: '.handle',
  animation: 200,
})
</script>

<template>
  <div class="flex flex-col gap-1 text-sm">
    <slot name="label">
      <label :for="inputId" class="font-medium">{{ label }}</label>
    </slot>

    <div ref="listEl" class="flex flex-col gap-1">
      <div v-for="(_, i) in model" class="flex items-center gap-2">
        <span class="handle flex items-center cursor-pointer">
          <Icon name="lucide--grip-vertical"></Icon>
        </span>
        <InputText
          v-model="model[i]"
          :placeholder="placeholder"
          size="small"
          fluid
          autofocus
          @focusout="() => checkEmpty(i)"
          @keyup.delete="() => checkEmpty(i)"
          @keyup.enter="(e) => add(e)"
          @emptied="() => remove(i)"
        />
      </div>

      <Button
        label="Add"
        icon="iconify lucide--plus"
        severity="secondary"
        size="small"
        outlined
        fluid
        @click="add"
      />
    </div>
  </div>
</template>
