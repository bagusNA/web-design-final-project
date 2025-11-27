<script setup lang="ts">
import VueZoomable from "vue-zoomable"
import "vue-zoomable/dist/style.css"

import type { EditorData } from '@/components/organisms/EditorBar.vue'

export interface PreviewProps {
  editorData: EditorData
}

const props = defineProps<PreviewProps>()
</script>

<template>
  <VueZoomable class="h-screen w-screen">
    <div class="A4-preview text-black bg-white">
      <p>{{ editorData.biodata.name }}</p>
      <p>{{ editorData.biodata.email }}</p>
      <p>{{ editorData.biodata.phoneNumber }}</p>
    </div>
  </VueZoomable>
</template>

<style scoped>
@import url("@/assets/styles/paper.css");
</style>
