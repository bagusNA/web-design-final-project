<script setup lang="ts">
import { ref } from 'vue'

import EditorBar, { type EditorData } from '@/components/organisms/EditorBar.vue'

const editorData = ref<EditorData>({
  biodata: {
    name: '',
    email: '',
    phoneNumber: '',
  }
})
</script>

<template>
  <EditorBar v-model:editorData="editorData" />

  <!-- Content -->
  <div class="w-full pt-10 px-4 sm:px-6 md:px-8 md:ps-112">
    <p>{{ editorData.biodata.name }}</p>
    <p>{{ editorData.biodata.email }}</p>
    <p>{{ editorData.biodata.phoneNumber }}</p>
  </div>
  <!-- End Content -->
</template>
