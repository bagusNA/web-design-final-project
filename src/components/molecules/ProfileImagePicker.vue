<script setup lang="ts">
import { ref, watch } from "vue"

import { toBase64 } from '@/utils/file.ts'

import Image from 'primevue/image'
import Button from "primevue/button"

const model = defineModel<string | null>({ default: null })

const fileInput = ref<HTMLInputElement | null>(null)
const preview = ref<string | null>(model.value)

watch(() => model.value, (val) => {
  preview.value = val
})

const triggerFileInput = () => {
  fileInput.value?.click()
}

const onFileSelect = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return

  const base64 = await toBase64(file)
  preview.value = base64
  model.value = base64
}

const clearImage = () => {
  preview.value = null
  model.value = null
  if (fileInput.value) fileInput.value.value = ""
}
</script>

<template>
  <div class="flex flex-col items-start gap-2">

    <div
      class="relative w-32 h-32 rounded-2xl overflow-hidden shadow cursor-pointer flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition"
    >
      <Image
        v-if="preview"
        :src="preview"
        preview
        class="w-full h-full object-cover"
      />

      <div
        v-else
        class="w-full h-full flex flex-col items-center justify-center text-gray-500"
        @click="triggerFileInput"
      >
        <i class="iconify lucide--image text-2xl mb-1"></i>
        <span class="text-sm">Choose</span>
      </div>
    </div>

    <Button
      v-if="preview"
      icon="iconify lucide--trash"
      severity="warn"
      label="Clear Image"
      size="small"
      @click.stop="clearImage"
    />

    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      class="hidden"
      @change="onFileSelect"
    />

  </div>
</template>
