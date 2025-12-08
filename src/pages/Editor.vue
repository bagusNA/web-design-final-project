<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'

import Button from 'primevue/button'
import EditorBar from '@/components/organisms/EditorBar.vue'
import Preview from '@/components/organisms/Preview.vue'
import EditorTopRightOverlay from '@/components/organisms/EditorTopRightOverlay.vue'
import { useResume } from '@/composables/useResume.ts'

const route = useRoute()

const { resume } = useResume(route.params.id as string)
</script>

<template>
  <EditorBar v-if="resume" v-model:editorData="resume">
    <div class="flex flex-wrap gap-2">
      <RouterLink to="/app">
        <Button label="Home" icon="iconify lucide--home" />
      </RouterLink>
    </div>
  </EditorBar>

  <Preview v-if="resume" :editorData="resume!" />

  <EditorTopRightOverlay />
</template>
