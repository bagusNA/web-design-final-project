<script setup lang="ts">
import VueZoomable from 'vue-zoomable'
import 'vue-zoomable/dist/style.css'

import type { EditorData } from '@/components/organisms/EditorBar.vue'
import { computed, ref } from 'vue'
import Button from 'primevue/button'
import {
  useResumeTemplate,
} from '@/composables/useResumeTemplate.ts'

export interface PreviewProps {
  editorData: EditorData
}

const props = defineProps<PreviewProps>()

const templateId = computed<string>(() => props.editorData.templateId)
const { template: resumeTemplate } = useResumeTemplate(templateId)

const defaultZoom = 0.8
const zoomStep = 0.1
const zoom = ref(defaultZoom)

const defaultPan = { x: 0, y: 0 }
const pan = ref(defaultPan)

const zoomIn = () => {
  zoom.value += zoomStep
}
const zoomOut = () => {
  zoom.value -= zoomStep
}
const resetZoomPan = () => {
  zoom.value = defaultZoom
  pan.value = { ...defaultPan }
}
</script>

<template>
  <VueZoomable
    v-model:zoom="zoom"
    v-model:pan="pan"
    :enableControlButton="true"
    :dblClickEnabled="false"
    class="h-screen w-screen"
  >
    <div class="flex gap-4">
      <div class="A4-preview text-black bg-white">
        <component :is="resumeTemplate.component" :data="editorData" />
      </div>
    </div>

    <template #buttons>
      <div class="absolute bottom-24 md:bottom-0 right-0 px-4 py-3 flex flex-col gap-2">
        <!-- Reset zoom & pan -->
        <Button
          icon="iconify lucide--refresh-ccw"
          severity="secondary"
          class="shadow"
          @click="resetZoomPan"
        />

        <!-- Zoom In -->
        <Button icon="iconify lucide--plus" severity="secondary" class="shadow" @click="zoomIn" />

        <!-- Zoom Out -->
        <Button icon="iconify lucide--minus" severity="secondary" class="shadow" @click="zoomOut" />
      </div>
    </template>
  </VueZoomable>
</template>

<style scoped>
@import url('@/assets/styles/paper.css');
</style>
