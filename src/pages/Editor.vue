<script setup lang="ts">
import { ref } from 'vue'
import { randomString } from '@/utils/string.ts'
import { EmploymentType } from '@/types/employment.ts'

import EditorBar, { type EditorData } from '@/components/organisms/EditorBar.vue'

const editorData = ref<EditorData>({
  biodata: {
    name: '',
    email: '',
    phoneNumber: '',
  },
  educationData: {
    educations: [
      {
        id: randomString(),
        schoolName: '',
        degree: '',
        startDate: null,
        endDate: null,
        location: '',
        description: '',
      }
    ],
  },
  experienceData: {
    experiences: [
      {
        id: randomString(),
        jobTitle: '',
        employer: '',
        employmentType: EmploymentType.FullTime,
        startDate: null,
        endDate: null,
        description: '',
      }
    ],
  }
})
</script>

<template>
  <EditorBar v-model:editorData="editorData" />

  <!-- Content -->
  <div class="w-full h-screen pt-10 px-4 sm:px-6 md:px-8 md:ps-112 bg-neutral-100 dark:bg-neutral-900">
    <p>{{ editorData.biodata.name }}</p>
    <p>{{ editorData.biodata.email }}</p>
    <p>{{ editorData.biodata.phoneNumber }}</p>
  </div>
  <!-- End Content -->
</template>
