<script setup lang="ts">
import VueZoomable from 'vue-zoomable'
import 'vue-zoomable/dist/style.css'

import type { EditorData } from '@/components/organisms/EditorBar.vue'
import SimpleTemplate from '@/components/organisms/templates/SimpleTemplate.vue'

export interface PreviewProps {
  editorData: EditorData
}

const props = defineProps<PreviewProps>()
</script>

<template>
  <VueZoomable :enableControlButton="false" class="h-screen w-screen">
    <div class="A4-preview text-black bg-white">
      <SimpleTemplate :data="editorData" />
    </div>
  </VueZoomable>
</template>

<style scoped>
@import url('@/assets/styles/paper.css');
</style>
