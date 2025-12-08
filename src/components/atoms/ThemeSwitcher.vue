<script setup lang="ts">
import Button from 'primevue/button'
import Icon from '@/components/atoms/Icon.vue'
import { useAccentColor } from '@/composables/UseAccentColor.ts'

const { colors, currentColor, applyColor, reset } = useAccentColor()
</script>

<template>
  <div>
    <div class="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
      <button
        v-for="color in colors"
        class="w-16 h-16 rounded-lg shadow-md flex items-center justify-center focus:outline-none transition hover:brightness-80 hover:ring-2 ring-neutral-100 cursor-pointer"
        :key="color.name"
        :style="{ backgroundColor: color.hex }"
        @click="applyColor(color.hex)"
      >
        <Transition name="fade">
          <Icon v-if="currentColor === color.hex" name="lucide--check" class="size-6"></Icon>
        </Transition>
      </button>
    </div>

    <div class="mt-4 space-y-2">
      <div class="flex items-center gap-3">
        <div class="w-6 h-6 rounded" :style="{ backgroundColor: currentColor }"></div>
        <div>
          <div class="text-sm text-neutral-700 dark:text-neutral-200">
            Current primary: <span class="font-medium">{{ currentColor }}</span>
          </div>
        </div>
      </div>

      <div class="flex gap-2">
        <Button label="Reset" @click="reset" />
      </div>
    </div>
  </div>
</template>
